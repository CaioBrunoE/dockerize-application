import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../model/client';



@Pipe({
  name: 'searchfilter',
})
export class SearchfilterPipe implements PipeTransform {
  transform(clients: Client[], searchValue: string): Client[] {
    if (!clients || !searchValue) {
      return clients;
    } else {
      return clients.filter((client) =>
        client.name
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      );
    }
  }

}

