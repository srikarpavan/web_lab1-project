import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userData = {
    id: 'manohar.jpg',
    name: 'Manohar Bollampally'
  };
  constructor() { }

  ngOnInit() {
  }

}
