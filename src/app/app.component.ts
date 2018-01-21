import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from './service/employee/employee.service';
import { Employee } from './service/employee/employee';

import { LoginService } from './service/login/login.service';
import { IValueProvider } from './service/valueprovider/IValueProvider';
import { valueProvider } from './service/valueprovider/valueprovider';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Contact Management App';
  userRole: string = 'SuperAdmin';
  isVisible: boolean = false;
  empList: Employee[];
  constructor(private empService: EmployeeService,
    public loginService: LoginService,
    @Inject(valueProvider) private valueProvider: IValueProvider) { }

  ngOnInit(): void {
    console.log(this.valueProvider);
    this.empList = this.empService.getEmployeeList();
  }

  addEmp() {
    this.empService.addEmployee();
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

}
