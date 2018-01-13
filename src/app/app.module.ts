import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';

import { EmployeeModule } from './employee/employee.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CommentsModule } from './comments/comments.module';

import { DepartmentComponent } from './department/department.component';
import { DepartmentDetailsComponent } from './department/department-details/depart-details.component';

import { CustomerComponent } from './customer/customer.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { ApiinterceptorService } from './interceptor/apiinterceptor.service';
import { LoginComponent } from './login/login.component';

import { LoginService } from './service/login/login.service';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    DepartmentDetailsComponent,
    CustomerComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    EmployeeModule,
    CommentsModule,
    RoutingModule
  ],
  // providers: [EmployeeService],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiinterceptorService, multi: true }, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
