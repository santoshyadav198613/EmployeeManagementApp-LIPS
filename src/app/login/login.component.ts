import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { User } from '../service/login/user';
import { LoginService } from '../service/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private loginService: LoginService,
    private route: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.loginService.login(this.user)) {
      //redirect to default page
      this.route.navigate(['/comments']);
    }
  }

}
