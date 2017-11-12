import {
  Component, OnInit,
  Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() empList: any[];
  @Output() message = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendToParent() {
    this.message.emit("This is message from child");
  }
}
