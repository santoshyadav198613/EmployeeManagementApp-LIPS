import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customcurrency'
})
export class CustomcurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
    return args + ':' + value;
  }

}
