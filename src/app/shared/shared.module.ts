import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatFormFieldModule } from '@angular/material';
import { CustomcurrencyPipe,SalaryfilterPipe } from '../common';
import { HoverDirective } from '../directives/hover.directive';
import { PasswordValidatorDirective } from '../directives/password-validator.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomcurrencyPipe,
    SalaryfilterPipe,
    HoverDirective,
    PasswordValidatorDirective,
    MatButtonModule,
    MatFormFieldModule
  ],
  declarations: [CustomcurrencyPipe, SalaryfilterPipe, HoverDirective, PasswordValidatorDirective]
})
export class SharedModule { }
