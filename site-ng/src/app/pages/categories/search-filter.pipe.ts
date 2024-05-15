import { Category } from './category';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(categories: Category[], searchValue: any, searchBy: any): Category[] {
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
