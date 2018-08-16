import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username: string;
  password: string;



  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'checkbox': new FormControl(null, null)
    });
  }

  onLogin() {
    console.log(this.loginForm);
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.authService.logIn(this.username, this.password);
    }


}

