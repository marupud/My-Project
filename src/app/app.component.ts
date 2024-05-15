import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from './models/user.model';
import { UserService } from './services/user.service';
import { TableComponent } from './table/table.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { LoginComponent } from './Authentication/login/login.component';
import { HomeComponent } from './home/home.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StoreModule } from '@ngrx/store';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, TableComponent, SignUpComponent, ArrayMethodsComponent, LoginComponent, HomeComponent, MyCounterComponent, StoreModule],
  template: `<div class="form-container content">
  <router-outlet></router-outlet>
  
  </div>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

  userInterface: User;
  constructor(private user: UserService) {
    this.userInterface = {
      id: 1,
      name: 'John Doe',
      email: 'saitejad65@gmail.com',
      age: 6
    };

  }

  ngOnInit() {


    this.user.getUsers().subscribe(data => {
      this.usersData = data;
      // console.log(this.usersData);
    },
      (error) => {
        // Handle error
        console.error('An error occurred:', error);
      });

    this.user.getApiUsers().subscribe(data => {
      this.restApiRequest = data;
    },
      (error) => {
        // Handle error
        console.error('An error occurred:', error);
      })
  }

  name: string = '';
  carName: string = ''
  imageUrl: string = 'https://example.com/image.jpg';
  userData: String[] = this.user.getUser();
  usersData: any;

  restApiRequest: any;

  // Method to handle button click event
  handleClick() {
    this.name = '';
  }
}
