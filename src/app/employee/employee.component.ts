import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements DoCheck {
  message: string;
  name: string = 'Sunil';
  divVisible: boolean = false;
  employeeList: any[] = [
    { id: 1, name: 'Test1', age: 34 },
    { id: 3, name: 'Test3', age: 35 },
    { id: 2, name: 'Test2', age: 37 }
  ];
  constructor() { }

  ngDoCheck(): void {
    console.log('this is do check event.');
  }

  toggle() {
    this.divVisible = !this.divVisible;
  }

  receiveFromChild(message: string) {
    this.message = message;
  }
}
