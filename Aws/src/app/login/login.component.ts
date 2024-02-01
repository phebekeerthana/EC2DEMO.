import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  onSubmit() {
    // You can add your authentication logic here
    // For simplicity, let's just navigate to the register page
    this.router.navigate(['/register']);
  }
}



