import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  coursesDetails = [
    {
    background: 'white',
    color: 'black',
    header: 'CHEMISTRY',
    content: 'UX Science progress experiment.',
    likes_id: 'heart',
    likes: 230,
    comments_id: 'envelope',
    comments: 100,
    footer_background: 'pink',
    footer_color: 'white'
  },
  {
    background: 'white',
    color: 'black',
    header: 'GEOGRAPHY',
    content: 'Discovering new places around the world',
    add : 'add to your courses',
    footer_background: 'rgb(86, 204, 247);',
    footer_color: 'white'
  }
];
subjectCourses = [
  {
    background: 'white',
    color: 'black',
    header: 'PHYSICAL EDUCATION',
    content: 'Volleyball college course valid certificate',
    likes_id: 'time',
    comments: '14 HOURS LEFT AT END',
    footer_background: 'green',
    footer_color: 'white'
  },
  {
    background: 'white',
    color: 'black',
    header: 'MATHS',
    content: 'KS2 Maths : Division & Fractions',
    likes_id: 'heart',
    likes: 130,
    comments_id: 'ok',
    comments: '80/100 complete',
    footer_background: 'violet',
    footer_color: 'white'
  }
];

courses = [
  {
    background: 'white',
    color: 'black',
    header: 'ENGLISH',
    content: 'English course for beginners',
    likes_id: 'time',
    likes: '1 HOUR LEFT',
    comments_id: 'ok',
    comments: 'INCLUDED',
    footer_background: 'red',
    footer_color: 'white'
  }
];
teachers = [
  {
    image: 'Jonathan Smithers.png',
    name: 'Jonathan Smithers',
    profession: 'English teacher'
  }
];
chemistryTeacher = [
  {
    image: 'sree.jpg',
    name: 'James Howell',
    profession: 'Chemistry'
  }
];
mathmatics = [
  {
    image: 'Jane Austen.png',
    name: 'Jane Austen',
    profession: 'Mathematics'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
