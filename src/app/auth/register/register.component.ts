import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  accnumber: number;
  dob: Date;
  phonenumber: number;

  hide = true;
  startDate = new Date(1970, 0, 1);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // matcher = new MyErrorStateMatcher();

  constructor(private signup: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'firstname': new FormControl(null, [Validators.required]),
      'lastname': new FormControl(null, [Validators.required]),
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'accnumber': new FormControl(null, [Validators.required]),
      'dob': new FormControl(null, [Validators.required]),
      'phonenumber': new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)])
    });
  }

  onSubmit() {
    const firstname = this.registerForm.value.firstname;
    const lastname = this.registerForm.value.lastname;
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const email = this.registerForm.value.email;
    const accnumber = this.registerForm.value.accnumber;
    const dob = this.registerForm.value.dob;
    const phonenumber = this.registerForm.value.phonenumber;
    this.signup.registerUser(firstname, lastname, username, password, email, accnumber, dob, phonenumber)
    .subscribe(
      (data) => {
        console.log(data);
        if (data.success) {
          this.router.navigate(['/user/:id']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
