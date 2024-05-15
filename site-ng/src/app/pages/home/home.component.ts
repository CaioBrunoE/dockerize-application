import { CartService } from './../shopping-card/services/cart.service';
import { Service } from './../service/model/service';

import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ServicePipe } from '../product/product.pipe';
import { ShoppingCardComponent } from '../shopping-card/shopping-card.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../product/model/product';
import { ProductService } from '../product/product.service';
import { AppModule } from '../../app.module';
import { Cart } from '../shopping-card/model/cart';



@Component({
  selector: 'app-home',
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
    ProductComponent,
    AppModule,
    ShoppingCardComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  cart: Cart = new Cart;

  constructor(

    private service: ProductService,
    //categories: Category[] = []
    public route: ActivatedRoute,
    private router: Router,
    private cartService: CartService) {}


  //ngOnInit(): void {
    //const offer = this.route.snapshot.paramMap.get('offer');
      //this.service.findByDiscount("true").subscribe(response => {
       // this.products = response;
       // console.log;{this.products}
     // });
    //}
  //}

  ngOnInit(): void {

    this.service.findByDiscount().subscribe(response => {
      this.products = response;
      //console.log(this.products);
    });
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

  //goItem(category: Category) {
    //if(category.type === 1) {
     // this.router.navigate(['/service', { idCategory: category.id }]);
    //} else {
      //this.router.navigate(['/product', { idCategory: category.id }]);
    //}
 // }


