import {
  Component, OnInit,
  Input, Output, EventEmitter,
  OnChanges, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnChanges {
  @Input() empList: any[];
  @Output() message = new EventEmitter<string>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes="+ changes);
  }
  
  ngOnInit() {
  }

  sendToParent() {
    this.message.emit("This is message from child");
  }
}
