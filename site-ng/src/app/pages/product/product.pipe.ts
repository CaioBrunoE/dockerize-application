import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/product';


@Pipe({
  name: 'product',
  standalone: true
})

export class ServicePipe implements PipeTransform {

  transform(products: Product[], searchValue: any): Product[] {
    if (!products || !searchValue){
      return products;
    } else {
      return products.filter(product => product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }

}
