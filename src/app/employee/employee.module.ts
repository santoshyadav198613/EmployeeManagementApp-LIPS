import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { EmployeeNewService } from '../service/employee/employee-new.service';
import { EmployeeService } from '../service/employee/employee.service';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

import { AuthGuard } from '../service/guards/auth.guard';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(
      [
        {
          path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard],
          children: [
            { path: ':id/edit', component: EmployeeEditComponent }
          ]
        }
      ]
    )
  ],
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
  ],
  providers: [{ provide: EmployeeService, useClass: EmployeeNewService }]
})
export class EmployeeModule { }
