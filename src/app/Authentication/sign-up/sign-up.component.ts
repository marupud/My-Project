import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  constructor(private loginService: LoginService) {

  }

  username: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  statusMessage: string = '';
  showAlert: boolean = false;
  alertMessage: string = '';
  userExists: boolean = false;

  passwordVerifications(): boolean {
    return this.password === this.passwordConfirmation;
  }




  onSubmit(): void {
    this.loginService.signUp(this.username, this.password).subscribe(
      response => {
        if (response == null) {
          this.statusMessage = "Username already exist, Please Login";
          this.userExists = true;
        }
        else {
          this.showMessage('User signed up successfully', 3000);
          // Optionally, you can navigate to another page or show a success message here
        }
      },
      error => {
        console.error('Error signing up:', error);
        // Optionally, you can show an error message to the user here
      }
    );
  }

  ngOnInit() {
  }

  showMessage(message: string, duration: number = 3000) {
    this.alertMessage = message;
    this.showAlert = true;

    // Hide the message after the specified duration
    setTimeout(() => {
      this.hideMessage();
    }, duration);
  }

  hideMessage() {
    this.showAlert = false;
    this.alertMessage = '';
  }


}
