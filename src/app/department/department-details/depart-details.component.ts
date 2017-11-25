import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-details',
  templateUrl: './depart-details.component.html',
  styleUrls: ['./depart-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit() {
  }

  sendToParent() {
    return "Send to Parent";
  }

}
