import {
  Component, OnInit, ViewChild, OnDestroy, ViewChildren,
  QueryList, AfterViewInit , ElementRef
} from '@angular/core';
import { DepartmentDetailsComponent } from './department-details/depart-details.component';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit, OnDestroy, AfterViewInit {
  message: string;
  @ViewChild(DepartmentDetailsComponent)
  departmentDetails: DepartmentDetailsComponent;

  @ViewChildren(DepartmentDetailsComponent) deptChildren: QueryList<DepartmentDetailsComponent>;

  @ViewChild('test') testDiv: ElementRef;

  constructor() { }
  ngOnInit() {
    this.departmentDetails.name = "IT and Communication";
    console.log(this.deptChildren);
    console.log(this.testDiv);

    this.testDiv.nativeElement.innerText ="This is demo app.";
  }

  ngAfterViewInit(): void {
    console.log(this.deptChildren);
    this.deptChildren.forEach(
      (data) => setTimeout(() => data.name = "IT and Communication", 0)
    )
  }

  receive() {
    this.message = this.departmentDetails.sendToParent();
  }
  ngOnDestroy(): void {
    alert('Department component will be destroyed.');
  }
}
