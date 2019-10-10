import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItem = [
    {
      id : 'books',
      name : 'StudentsWorld',
      route : ''
    },
    {
      id : 'books',
      name : 'Discover books',
      route : ''
    },
    {
      id : 'courses',
      name : 'Online courses',
      route : ''
    },
    {
      id : 'Announcements',
      name : 'Announcements',
      route : ''
    },
    {
      id : 'Video',
      name : 'Video lessions',
      route : ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
