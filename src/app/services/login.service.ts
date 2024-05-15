import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  login(username: string, password: string): Observable<any> {

    // Combine username and password into an object
    const loginData = { username, password };

    // Get users data
    return this.getUsers().pipe(
      switchMap(users => {
        // Find user with matching username and password
        const userData = users.find((user: any) => user.username === username && user.password === password);

        if (!userData) {
          console.log("User unavailable, please sign up");
          return of(null); // Return an observable with null value
        } else {
          console.log("User exists");
          return of(userData); // Return an observable with user data
        }
      }),
      catchError(error => {
        console.error("Error retrieving user:", error);
        return of(null); // Return an observable with null value
      })
    );
  }


  signUp(username: string, password: string): Observable<any> {
    // Create a new user object
    const newUser = { username, password };

    // Check if the user already exists
    return this.getUsers().pipe(
      switchMap(users => {
        const existingUser = users.find((user: any) => user.username === username);
        if (existingUser) {
          console.log("User Already Created Please Log In");
          return of(null); // Return an observable with null value
        } else {
          console.log("New User Added");
          // Send only the new user data to the server
          return this.http.post(this.apiUrl, newUser).pipe(
            catchError(error => {
              console.error("Error adding new user:", error);
              return of(null); // Return an observable with null value
            })
          );
        }
      })
    );
  }

}
