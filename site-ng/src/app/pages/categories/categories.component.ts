import { Component, OnInit, inject } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterLink} from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, SearchFilterPipe, FormsModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  private categoryService = inject(CategoryService);

  searchValue: string = '';
  searchBy: string = '';

  constructor(private router: Router) {}

  ngOnInit():void {
    this.loadAll();
  }

  categories: Category[] = [];

  loadAll() {
    this.categoryService.listAll()
    .subscribe(categories => {
      this.categories = categories;
    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goItem(category: Category) {
    if(category.type === 1) {
      this.router.navigate(['/service', { idCategory: category.id }]);
    } else {
      this.router.navigate(['/product', { idCategory: category.id }]);
    }
  }

  transformType(category: Category) {
    const product: string = "Produto";
    const service: string = "Serviço";
    if( category.type === 1 ) {
      category.type.toString();
      return service;
    } else if ( category.type === 2 ) {
      category.type.toString();
      return product;
    } else {
      return "Categoria";
    }
  }

}
