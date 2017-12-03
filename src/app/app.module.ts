import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentDetailsComponent } from './department/department-details/depart-details.component';

import { EmployeeNewService } from './service/employee/employee-new.service';

import { EmployeeService } from './service/employee/employee.service';
import { CustomerComponent } from './customer/customer.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DepartmentComponent,
    DepartmentDetailsComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers: [EmployeeService],
  providers: [{ provide: EmployeeService, useClass: EmployeeNewService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
