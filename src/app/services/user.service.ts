import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:4200/assets/data.json';
  private restApiUrl = 'https://jsonplaceholder.typicode.com/users';
  private apiUrlData = 'http://localhost:4200/assets/userSample.json';


  constructor(private http: HttpClient) { }

  user: string[] = ['Saiteja', 'Sahithya', 'Sahithi'];

  getUser(): string[] {
    return this.user;
  }

  getApiUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.restApiUrl);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUsersTable(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlData);
  }

  getAnimals(): Promise<any[]> {
    // Simulating asynchronous data fetching
    return new Promise<any[]>((resolve, reject) => {
      setTimeout(() => {
        // Simulated animals data
        const animals = [
          { id: 1, name: 'Donkey', email: 'donkey@example.com', age: 30 },
          { id: 2, name: 'Tiger', email: 'tiger@example.com', age: 25 },
          { id: 3, name: 'MOnkey', email: 'monkey@example.com', age: 40 }
        ];
        // Resolving the promise with the fetched animals
        resolve(animals);
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
}
