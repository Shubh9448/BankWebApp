import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface RegisterResponse {
    success: boolean;
}


@Injectable()
export class AuthService {

    url = 'http://localhost:4000';

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
        const register = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password,
            email: email,
            accnumber: accountnumber,
            dob: dob,
            phonenumber: phonenumber
        };
        return this.http.post<RegisterResponse>(`${this.url}/register`, register);
    }
}
