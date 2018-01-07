import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiinterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(req);
    // let newRequest = req.clone({ headers: new HttpHeaders().set('test', 'testval').set('apiKey', 'gfdgdgsdf').set('password','password') });

    if (req.method === 'POST') {
      let createdDate = new Date().toLocaleDateString();
      let body = req.body;
      body.createdDate = createdDate;
      let newRequest = req.clone({
        body: body, headers: new HttpHeaders().set('test', 'testval').set('apiKey', 'gfdgdgsdf').set('password', 'password')
      });

      return next.handle(newRequest);
    }
    return next.handle(req);
  }

}
