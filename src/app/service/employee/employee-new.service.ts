import { Injectable } from '@angular/core';

import { EmployeeService } from './employee.service';

@Injectable()
export class EmployeeNewService extends EmployeeService {

  constructor() {
    super();
   }

  getEmployeeList() {
    return  this.employeeList = [
        { id: 1, name: 'Sumit', age: 34, dob: new Date('23-oct-1980'), salary: 45000 },
        { id: 2, name: 'Amit', age: 33, dob: new Date('23-oct-1984'), salary: 55000 },
        { id: 3, name: 'Swapnil', age: 36, dob: new Date('23-oct-1986'), salary: 65000 },
        { id: 4, name: 'Virat', age: 34, dob: new Date('23-oct-1985'), salary: 75000 },
        { id: 5, name: 'Sachin', age: 44, dob: new Date('23-oct-1975'), salary: 95000 },
        { id: 6, name: 'Ajay', age: 43, dob: new Date('23-oct-1975'), salary: 115000 }
      ]
    }

}
