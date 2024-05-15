import { Pipe, PipeTransform } from '@angular/core';

import { Order } from '../model/order';

@Pipe({
  name: 'ordersearchfilter',
})
export class OrderSearchfilterPipe implements PipeTransform {
  transform(clients: Order[], searchValue: string): Order[] {
    if (!clients || !searchValue) {
      return clients;
    } else {
      return clients.filter((client) =>
        client.client
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      );
    }
  }
}
