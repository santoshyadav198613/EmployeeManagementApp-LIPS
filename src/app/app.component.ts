import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/employee/employee.service';
import { Employee } from './service/employee/employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Contact Management App';
  userRole: string = 'SuperAdmin';
  isVisible: boolean = false;
  empList : Employee[];
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.empList = this.empService.getEmployeeList();
  }

  addEmp() {
    this.empService.addEmployee();
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

}
