import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../model/service';

@Pipe({
  name: 'service',
  standalone: true
})

export class ServicePipe implements PipeTransform {

  transform(services: Service[], searchValue: any): Service[] {
    if (!services || !searchValue){
      return services;
    } else {
      return services.filter(service => service.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }

}
