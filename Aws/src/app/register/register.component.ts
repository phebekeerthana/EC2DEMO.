import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = {
    fullname: '',
    password: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    // Your registration logic here
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

