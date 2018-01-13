import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DepartmentComponent } from '../department/department.component';
import { CustomerComponent } from '../customer/customer.component';
import { CommentsComponent } from '../comments/comments.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

import { LoginComponent } from '../login/login.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'comments', component: CommentsComponent },
      { path: 'login' , component: LoginComponent  },
      { path: 'customer', component: CustomerComponent },
      { path: 'department', component: DepartmentComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }, //set default route
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
