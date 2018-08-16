import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }


  getUserDetails(username, password) {
    return this.http.post<any>(('/api/auth'), {
        username,
        password
    });
}
}
