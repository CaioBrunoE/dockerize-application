import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';


@Pipe({
  name: 'productsearchfilter'
})
export class ProductSearchfilterPipe implements PipeTransform {

  transform(products: Product[], searchValue:string,  searchBy: string): Product[] {

    if(!products) {
      return [];
    }
    if(!searchValue) {
      return products
    }

    switch(searchBy) {
      case 'name':
        return products.filter(product => product.name.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
      case 'description':
        return products.filter(product => product.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
        case 'price':
          return products.filter(product => product.price.toString().includes(searchValue));
          case 'category':
            return products.filter(product => product.idCategory.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
            case 'brand':
              return products.filter(product => product.brand.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
              case 'stock':
                return products.filter(product => product.stock.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
                case 'supplier':
                  return products.filter(product => product.supplier.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
      default:
        return products.filter(product => product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())); //||products.description.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }
}

