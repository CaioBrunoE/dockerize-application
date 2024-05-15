import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Product } from './model/product';
import { ProductService } from './product.service';
import { RouterLink } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../shopping-card/services/cart.service';
import { ShoppingCardComponent } from '../shopping-card/shopping-card.component';
import { ServicePipe } from './product.pipe';
import { Cart } from '../shopping-card/model/cart';
import { HomeComponent } from '../home/home.component';
import { AppModule } from '../../app.module';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterLink,
    DetailsComponent,
    RouterModule,
    FormsModule,
    ShoppingCardComponent,
    ServicePipe,
    HomeComponent,
    AppModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  searchValue: string = '';
  products: Product[] = [];
  filteredService: Product[] = []
  category: string = '';
  cart: Cart = new Cart;


  constructor(
    public route: ActivatedRoute,
    private service: ProductService,
    private cartService: CartService) {}


    ngOnInit(): void {
      const idCategory = this.route.snapshot.paramMap.get('idCategory');
      if(idCategory){
        this.service.findByIdCategory(idCategory).subscribe(response => {
          this.products = response;
          this.filteredService = this.products;
        });
      } else {
        this.service.findAll().subscribe(response => {
          this.products = response;
          this.filteredService = this.products;
        })
      }
    }

    onclickAdd(product: any) {
      let cartProduct = this.cart.products.find(p => p.id === product.id);

         if (cartProduct) {
           cartProduct.quantity++;
           this.cart.totalCart = cartProduct.price * cartProduct.quantity;

         } else {
           product.total = product.price;
           this.cart.products.push(product);

         }
       }

       onclickSub(product: any) {
         let cartProduct = this.cart.products.find(p => p.id === product.id);

         if (cartProduct && cartProduct.quantity > 1  ) {
           cartProduct.quantity-- ;
           this.cart.totalCart = cartProduct.price * cartProduct.quantity;

         } else if (cartProduct && cartProduct.quantity == 1) {
           this.cart.products = this.cart.products.filter(p => p.id !== product.id);
           cartProduct.quantity-- ;

         }
       }


  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

}


