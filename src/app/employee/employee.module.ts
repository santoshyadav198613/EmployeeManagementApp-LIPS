import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { EmployeeNewService } from '../service/employee/employee-new.service';
import { EmployeeService } from '../service/employee/employee.service';

@NgModule({
  imports: [
    SharedModule,
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
