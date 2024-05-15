import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  showAlert: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {

  }

  ngOnInit(): void {

  }

  login() {
    this.loginService.login(this.username, this.password).subscribe(
      response => {
        if (response) {
          this.router.navigate(['/']);
          const { username, password } = response;
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
          console.log("Username and password data stored in localStorage. Username" + this.username + "Password" + this.password);
        }
        else {
          this.router.navigate(['/signup']);
        }
      }
    )
  }
}
