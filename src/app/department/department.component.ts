import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentDetailsComponent } from './department-details/depart-details.component';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  message: string;
  @ViewChild(DepartmentDetailsComponent)
  departmentDetails: DepartmentDetailsComponent
  constructor() { }

  ngOnInit() {
    this.departmentDetails.name = "IT and Communication";
  }

  receive() {
    this.message = this.departmentDetails.sendToParent();
  }

}
