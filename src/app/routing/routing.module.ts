import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmployeeComponent } from '../employee/employee.component';
import { DepartmentComponent } from '../department/department.component';
import { CustomerComponent } from '../customer/customer.component';
import { CommentsComponent } from '../comments/comments.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'comments', component: CommentsComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'department', component: DepartmentComponent },
      { path: '', redirectTo: 'comments', pathMatch: 'full' }, //set default route
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
