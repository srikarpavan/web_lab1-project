import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContentComponent} from './main-content/main-content.component';
import {UserInfoComponent} from './user-info/user-info.component';
const routes: Routes = [
  {path : '', redirectTo: 'online_courses', pathMatch: 'full'},
  {path : 'online_courses', component: MainContentComponent},
  {path : 'userInfo', component: UserInfoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
