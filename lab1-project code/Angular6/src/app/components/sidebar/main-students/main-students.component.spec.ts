import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStudentsComponent } from './main-students.component';

describe('MainStudentsComponent', () => {
  let component: MainStudentsComponent;
  let fixture: ComponentFixture<MainStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
