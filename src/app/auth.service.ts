import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface RegisterResponse {
    success: boolean;
}


@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {}


    loggedIn = false;
    isAuthenticated() {
        return new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
    }
    logIn(username: string, password: string) {
        this.loggedIn = true;
    }
    logOut() {
        this.loggedIn = false;
    }

    registerUser(firstname, lastname, username, password, email, accountnumber, dob, phonenumber) {

        return this.http.post<RegisterResponse>('/api/register', {
           firstname,
           lastname,
           username,
           password,
           email,
           accountnumber,
           dob,
           phonenumber
        });
    }
}
