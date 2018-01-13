import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { EmployeeNewService } from '../service/employee/employee-new.service';
import { EmployeeService } from '../service/employee/employee.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(
      [
        { path: 'employee', component: EmployeeComponent }
      ]
    )
  ],
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
  ],
  providers: [{ provide: EmployeeService, useClass: EmployeeNewService }]
})
export class EmployeeModule { }
