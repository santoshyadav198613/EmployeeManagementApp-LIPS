import { Injectable } from '@angular/core';
import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Injectable()
export class CommentLoadGuard implements CanLoad {

  constructor(private loginService: LoginService,
    private router: Router) {

  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isLoggedIn) {
      return true
    }
    this.router.navigate(['/login']);
    return false;
  }

}
