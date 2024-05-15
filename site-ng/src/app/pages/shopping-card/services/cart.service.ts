import { Cart } from './../model/cart';
import { Product } from './../../product/model/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart = this.getCartSession();

  currentCount = this.cart.products.length;

  constructor() {}

  addToCart(product: any) {
    let existingProduct = this.cart.products.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.products.push(product);
    }

    this.updateCartDataInSession(this.cart.products);
  }

  removeToCart(product: any) {
    let existingProduct = this.cart.products.find((p) => p.id === product.id);

    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity--;

    } else {

      delete this.cart.products[product.id];
    }

    this.updateCartDataInSession(this.cart.products);
  }

  //////////////////////////////////////////

  static SESSION_CARD_KEY = 'session_card';

  public saveCartDataInSession(cart: Cart) {
    sessionStorage.setItem(CartService.SESSION_CARD_KEY, JSON.stringify(cart));
  }

  public updateCartDataInSession(products: Product[]) {
    let cart: Cart = this.getCartSession();
    cart.products = products;
    cart.totalCart = products.length;
    sessionStorage.setItem(CartService.SESSION_CARD_KEY, JSON.stringify(cart));
  }

  removeCart() {
    sessionStorage.removeItem(CartService.SESSION_CARD_KEY);
  }

  removeItemKey(itemKey: string) {
    let parsedCart = this.getCartSession().products;

    let updatedCart = parsedCart.filter((product) => product.id !== itemKey);
    this.saveCartDataInSession({
      ...this.getCartSession(),
      products: updatedCart,
    });

    this.updateCartDataInSession(updatedCart);
  }

  public getCartSession(): Cart {
    if (typeof window !== 'undefined') {
      const cart = window.sessionStorage.getItem(CartService.SESSION_CARD_KEY);
      if (cart) {
        return JSON.parse(cart);
      }
    }

    return new Cart();
  }

  get valorTotal() {
    let total = 0;
    for (let product of this.cart.products) {
      total += product.price * product.quantity;
    }
    return total;
  }
}
