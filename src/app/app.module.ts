import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { EmployeeModule } from './employee/employee.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';


import { DepartmentComponent } from './department/department.component';
import { DepartmentDetailsComponent } from './department/department-details/depart-details.component';

import { CustomerComponent } from './customer/customer.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { ApiinterceptorService } from './interceptor/apiinterceptor.service';
import { LoginComponent } from './login/login.component';

import { LoginService } from './service/login/login.service';

import { AuthGuard } from './service/guards/auth.guard';

import { CommentLoadGuard } from './service/comment/comment-load.guard';

import { valueProvider, VALUE_CONFIG } from './service/valueprovider/valueprovider';





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
    BrowserAnimationsModule,
    SharedModule,
    EmployeeModule,
    RoutingModule
  ],
  // providers: [EmployeeService],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiinterceptorService, multi: true }, LoginService, AuthGuard, CommentLoadGuard,
    { provide: valueProvider, useValue: VALUE_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
