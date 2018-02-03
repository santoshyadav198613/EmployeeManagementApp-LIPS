import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomcurrencyPipe } from '../common/customcurrency.pipe';
import { SalaryfilterPipe } from '../common/salaryfilter.pipe';
import { HoverDirective } from '../directives/hover.directive';
import { PasswordValidatorDirective } from '../directives/password-validator.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomcurrencyPipe,
    SalaryfilterPipe,
    HoverDirective,
    PasswordValidatorDirective
  ],
  declarations: [CustomcurrencyPipe,SalaryfilterPipe,HoverDirective,PasswordValidatorDirective]
})
export class SharedModule { }
