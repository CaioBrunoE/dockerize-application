import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product/model/product';
import { ProductService } from '../product/product.service';
import { CartService } from '../shopping-card/services/cart.service';
import { Cart } from '../shopping-card/model/cart';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterLink,
    ProductComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  product: Product = new Product;
  cart: Cart = new Cart;


  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService) {}


    addToCart(product: any) {
      this.cartService.addToCart(product);

    }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
    this.service
      .getById(id)
      .subscribe( response => this.product = response);
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
}
