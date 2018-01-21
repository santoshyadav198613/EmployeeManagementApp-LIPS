
import { CustomerService } from './customer.service';
import { LoginService } from '../login/login.service';

export function customerFactory(loginService: LoginService) {
    return new CustomerService(loginService.isAdmin);
}


// let customer_factory =
//     { provide: CustomerService, useFactory: customerFactory, deps: [LoginService] }
