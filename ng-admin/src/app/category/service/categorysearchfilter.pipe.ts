import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../category';

@Pipe({
  name: 'searchfilter'
})
export class CategorySearchfilterPipe implements PipeTransform {

  transform(categories: Category[], searchValue: string, searchBy: string): Category[] {

    if(!categories) {
      return [];
    }
    if(!searchValue) {
      return categories
    }

    switch(searchBy) {
      case 'type':
        return categories.filter(category => category.type.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
      case 'name':
        return categories.filter(category => category.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
      default:
        return categories.filter(category => category.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || category.type.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }
}
