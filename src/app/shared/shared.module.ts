import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomcurrencyPipe } from '../common/customcurrency.pipe';
import { SalaryfilterPipe } from '../common/salaryfilter.pipe';

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
    SalaryfilterPipe
  ],
  declarations: [CustomcurrencyPipe,SalaryfilterPipe]
})
export class SharedModule { }
