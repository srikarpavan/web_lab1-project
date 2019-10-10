import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-students',
  templateUrl: './main-students.component.html',
  styleUrls: ['./main-students.component.scss']
})
export class MainStudentsComponent implements OnInit {
  sideHeading = {
    id: 'MainStudent',
    name: 'Main Students',
    };
  iconInfo = [
    {
      id: 'book',
      name: 'Discover books',
      route: "https://www.umkcbookstore.com"
    },
    {
      id: 'education',
      route: 'MainContentComponent',
      name: 'Online courses',
    },
    {
      id: 'globe',
      name: 'Announcements',
    },
    {
      id: 'facetime-video',
      name: 'Video lesson',
    }
];

  userData = {
    id: 'manohar.jpg',
    name: 'Manohar Bollampally',
    settingId: 'cog'
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect = function () {
    this.router.navigate(['userprofile']);
  };
}
