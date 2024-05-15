import { Pipe, PipeTransform } from '@angular/core';
import { Payment } from '../payments-model/payment';

@Pipe({
  name: 'searchfilter'
})
export class PaymentsSearchfilterPipe implements PipeTransform {

  transform(payments: Payment[], searchValue:string): Payment[] {

    if(!payments || ! searchValue) {
      return payments;
    } else {
      return payments.filter(payment => payment.status.includes(searchValue));
    }
  }
}
