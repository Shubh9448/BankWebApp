import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  accountnumber = '20172505052';
  name = 'Shubham Patial';
  accbalance = 20000;
  transactions = 'transaction';

  constructor() { }

  ngOnInit() {
  }

}
