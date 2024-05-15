import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/category/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  totalLength: any;
  page: number = 1;

  searchValue: any;
  searchBy: string;

  products: Product[] = [];
  selectedProduct: Product;
  successMessage: string;
  errorMessage: string;
  categories: Category[] = [];

  constructor(
    private service: ProductService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .findAll()
      .subscribe( response => this.products = response);
      this.loadProducts();
      this.loadCategories();
  }

  loadProducts(){
    this.service.findAll().subscribe(
      (products) => {
        this.products = products;
      },
      (errorResponse) => {
        console.error('', errorResponse);
      }
    )
  }


  loadCategories(){
    this.service.findByTypeProduct().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (errorResponse) => {
        console.error('', errorResponse);
      }
    )
  }

  getCategoryName(idCategory: string): string {
    const category = this.categories.find(cat => cat.id === idCategory);
    return category ? category.name : '';
  }


  createProduct() {
    this.router.navigate(['product-form'])
  }

}

