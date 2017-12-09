import { Injectable } from '@angular/core';
import { Employee } from "./employee";
@Injectable()
export class EmployeeService {

  employeeList: Employee[] = [];
  // empList : Array<Employee> = new Array<Employee>();
  constructor() { }

  getEmployeeList() {
    return this.employeeList = [
      { id: 1, name: 'Sumit', age: 34, dob: new Date('23-oct-1980'), salary: 45000 },
      { id: 2, name: 'Amit', age: 33, dob: new Date('23-oct-1984'), salary: 55000 },
      { id: 3, name: 'Swapnil', age: 36, dob: new Date('23-oct-1986'), salary: 65000 },
      { id: 4, name: 'Virat', age: 34, dob: new Date('23-oct-1985'), salary: 75000 }
    ]
  }

  addEmployee() {
    let emp: Employee = { id: 5, name: 'Rohit', age: 32, dob: new Date('23-Jan-1985'), salary: 85000 };

    this.employeeList.push(emp);
  }

  addEmp(empl: Employee) {
      this.employeeList.push(empl);
  }

}
