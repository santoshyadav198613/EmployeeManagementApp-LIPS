import { Component, OnInit, DoCheck } from '@angular/core';
import { EmployeeService } from '../service/employee/employee.service';
import { Employee } from '../service/employee/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  //, providers : [EmployeeService] for local instance
})
export class EmployeeComponent implements OnInit, DoCheck {
  message: string;
  name: string = 'Sunil';
  divVisible: boolean = false;
  employeeList: Employee[];
  employee: Employee = new Employee();
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeList = this.empService.getEmployeeList();
  }
  ngDoCheck(): void {
    console.log('this is do check event.');
  }

  save(empForm){
    this.empService.addEmp(this.employee);
    this.employee = new Employee();
    empForm.reset();
  }

  toggle() {
    this.divVisible = !this.divVisible;
  }

  receiveFromChild(message: string) {
    this.message = message;
  }
}
