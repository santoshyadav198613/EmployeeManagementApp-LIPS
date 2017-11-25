import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userRole: string = 'SuperAdmin';
  isVisible: boolean = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }

}
