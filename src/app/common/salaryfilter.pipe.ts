import { Pipe, PipeTransform } from '@angular/core';

import { Employee } from '../service/employee/employee';

@Pipe({
  name: 'salaryfilter'
})
export class SalaryfilterPipe implements PipeTransform {

  transform(empList: Employee[], salary: number): Employee[] {
    return empList.filter((emp) => emp.salary > salary);
  }

}
