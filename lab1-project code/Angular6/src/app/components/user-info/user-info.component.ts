import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userDetails = {
    name : "manohar bollampally",
    email : "manoharbollampally@gmail.com",
    password : "mounika"
  }
  constructor() { }

  ngOnInit() {
  }

}
