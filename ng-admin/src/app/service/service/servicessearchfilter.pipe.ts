import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../model/service';

@Pipe({
  name: 'servicessearchfilter'
})
export class ServicessearchfilterPipe implements PipeTransform {

  transform(services: Service[], searchValue: string): Service[] {
    if (!services || ! searchValue){
      return services;
    } else {
      return services.filter(service => service.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }
}
