import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url = 'http://localhost:4000';

  constructor(private http: HttpClient) { }


  getUserDetails(username: string) {
    const uname = username;
    return this.http.get<any>((`${this.url}/${uname}`));
}
}
