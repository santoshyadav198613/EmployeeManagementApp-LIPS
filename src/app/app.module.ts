import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentDetailsComponent } from './department/department-details/depart-details.component';

import { EmployeeNewService } from './service/employee/employee-new.service';

import { EmployeeService } from './service/employee/employee.service';
import { CustomerComponent } from './customer/customer.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { ApiinterceptorService } from './interceptor/apiinterceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DepartmentComponent,
    DepartmentDetailsComponent,
    CustomerComponent,
    CommentsComponent,
    CommentListComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'comments', component: CommentsComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'department', component: DepartmentComponent },
      { path: '', redirectTo: 'comments', pathMatch: 'full' }, //set default route
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  // providers: [EmployeeService],
  providers: [{ provide: EmployeeService, useClass: EmployeeNewService },
  { provide: HTTP_INTERCEPTORS, useClass: ApiinterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
