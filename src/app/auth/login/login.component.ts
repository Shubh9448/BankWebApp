// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AuthService } from '../../auth.service';
// import { UserdataService } from '../../userdata.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   loginForm: FormGroup;
//   username: string;
//   password: string;



//   constructor(private authService: AuthService,
//               private dataService: UserdataService) {
//   }

//   ngOnInit() {
//   this.loginForm = new FormGroup({
//       'username': new FormControl('', [Validators.required]),
//       'password': new FormControl('', [Validators.required]),
//       'checkbox': new FormControl(null, null)
//     });
//   }

//   onLogin() {
//     console.log(this.loginForm);
//     this.username = this.loginForm.value.username;
//     this.password = this.loginForm.value.password;
//     this.dataService.getUserDetails(this.username).subscribe((value) => {
//       console.log(value);
//     },
//   (err) => {
//     console.log(err);
//   });
//     }


// }


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../../_services';
import { User } from '../../_models';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    currentUser: User;
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
    response: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {}

    ngOnInit() {
        this.loginForm = new FormGroup({
            'username': new FormControl('', [Validators.required]),
            'password':  new FormControl('', [Validators.required])
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }


    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
            .pipe(first())
            .subscribe(
                data => {
                  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                  console.log(this.returnUrl);
                  this.router.navigate([`/${ this.currentUser.firstName}`]);
                },
                error => {
                    this.response = error;
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
