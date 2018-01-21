import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

  constructor(private isAdmin: boolean) { }

  getCustomers() {
    if (this.isAdmin) {
      return "Valid User";
    }
    else {
      return "UnAuthorized User";
    }
  }
}
