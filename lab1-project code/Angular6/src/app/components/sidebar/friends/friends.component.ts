import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  friendsList =  [
    {
      id: 'manohar.jpg',
      name: 'Manohar Bollampally',
      message_icon_id : 'comment',
      value: 3
    },
    {
      id: 'harsha.jpg',
      name: 'S.l.a.s.h',
    },
    {
      id: 'ranga.jpg',
      name: 'Sree',
    }
];
friendsHeading = {
  id: 'Friends',
  name: 'FRIENDS',
  };
  constructor() { }

  ngOnInit() {
  }

}
