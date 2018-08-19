// import { Component, OnInit } from '@angular/core';
// import {FormControl, Validators, FormGroup} from '@angular/forms';
// import { AuthService } from '../../auth.service';
// import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService } from '../../_services';

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

  // isDisabled = true;

  // registerForm: FormGroup;
  // firstname: string;
  // lastname: string;
  // username: string;
  // password: string;
  // email: string;
  // accnumber: number;
  // dob: Date;
  // phonenumber: number;

  // response = '';

  // hide = true;
  // startDate = new Date(1970, 0, 1);

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // // matcher = new MyErrorStateMatcher();

  // constructor(private signup: AuthService,
  //             private router: Router) { }

  // ngOnInit() {
  //   this.registerForm = new FormGroup({
  //     'firstname': new FormControl(null, [Validators.required]),
  //     'lastname': new FormControl(null, [Validators.required]),
  //     'username': new FormControl(null, [Validators.required]),
  //     'password': new FormControl(null, [Validators.required]),
  //     'email': new FormControl(null, [Validators.required, Validators.email]),
  //     'accnumber': new FormControl(null, [Validators.required]),
  //     'dob': new FormControl(null, [Validators.required]),
  //     'phonenumber': new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)])
  //   });
  // }

  // onSubmit() {
  //   const firstname = this.registerForm.value.firstname;
  //   const lastname = this.registerForm.value.lastname;
  //   const username = this.registerForm.value.username;
  //   const password = this.registerForm.value.password;
  //   const email = this.registerForm.value.email;
  //   const accnumber = this.registerForm.value.accnumber;
  //   const dob = this.registerForm.value.dob;
  //   const phonenumber = this.registerForm.value.phonenumber;
  //   this.signup.registerUser(firstname, lastname, username, password, email, accnumber, dob, phonenumber)
  //   .subscribe(
  //     (data) => {
  //       // console.log(data);
  //       if (data) {
  //         console.log(data);
  //         this.router.navigate(['/user/1']);
  //         this.registerForm.reset();
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'username': ['', Validators.required],
            'password': ['', [Validators.required, Validators.minLength(6)]],
            'email': ['', Validators.required, Validators.email],
            'accnumber': ['', Validators.required],
            'dob': ['', Validators.required],
            'phonenumber': ['', Validators.required, Validators.maxLength(10), Validators.minLength(10)]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        // if (this.registerForm.invalid) {
        //     return;
        // }

        this.loading = true;
        console.log(this.registerForm.value);
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}
