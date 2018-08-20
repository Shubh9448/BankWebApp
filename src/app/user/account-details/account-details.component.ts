import { Component, OnInit } from '@angular/core';
import { User } from '../../_models';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  loggedInUser: User;

  // accountnumber = '20172505052';
  // name = 'Shubham Patial';
  // accbalance = 20000;
  // transactions = 'transaction';

  constructor() {
    this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
  }

}
