import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'khmerCurrency'
})
export class KhmerCurrencyPipe implements PipeTransform {

  private readonly rate = 4100;

  transform(value: number, decimals: number = 0): string {
    if (isNaN(value)) {
      return '';
    }
    const converted : number = value * this.rate;
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(converted) + ' KHR';
  }
}



