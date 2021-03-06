import { Component, OnInit } from '@angular/core';

import { cardValidator } from '../custom/cardnumber-validator';

import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

import { CustomerService } from '../service/customer/customer.service';

import { customerFactory } from '../service/customer/customer-factory';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [{ provide: CustomerService, useFactory: customerFactory, deps: [LoginService] }]
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  constructor(private fb: FormBuilder,
    private customerService: CustomerService) { }

  ngOnInit() {

    console.log(this.customerService.getCustomers());

    this.customerForm = this.fb.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]),
      email: new FormControl('', [Validators.email]),
      dob: new FormControl('', [Validators.required]),
      address: this.fb.group(
        {
          addressLine1: new FormControl('', [Validators.required]),
          addressLine2: new FormControl('', []),
          city: new FormControl('', [Validators.required]),
          pin: new FormControl('', [Validators.required])
        }
      ),
      cards: this.fb.array(
        [
          this.buildForm()
        ]
      )
    });
  }

  buildForm() {
    return this.fb.group(
      {
        cardNumber: new FormControl('', [Validators.required, cardValidator]),
        expMonth: new FormControl('', [Validators.required]),
        expYear: new FormControl('', [Validators.required]),
        cvv: new FormControl('', [Validators.required])
      }
    )
  }

  addCard() {
    let card = this.customerForm.controls['cards'] as FormArray;
    card.push(this.buildForm());
  }

  save() {
    console.log(this.customerForm.value);
    // this.customerForm.reset();
  }



}
