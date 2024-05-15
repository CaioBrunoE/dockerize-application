import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID, HostListener  } from '@angular/core';
import { CartService } from '../../pages/shopping-card/services/cart.service';
import { Router, RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import { LoginService } from '../../pages/login/services/login.service';

registerLocaleData(localePt)
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    CurrencyPipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {


  constructor(private router: Router, private cartService: CartService, private loginService: LoginService,) {}

  hideComponent(): boolean {
    const url = this.router.url;
    return (
      url === '/login' ||
      url === '/signup' ||
      url === '/order' ||
      url === '/order-detail'
    );
  }

  getContador():number{
   return this.cartService.getCartSession().totalCart;
  }
  getValor():number{
    return this.cartService.valorTotal;

  }

  ngOnInit(){


  }

  public getUserSession(): any {
    const user = window.sessionStorage.getItem(LoginService.SESSION_USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
    const user = window.sessionStorage.getItem(LoginService.SESSION_USER_KEY);
    if (user) {
      return true;
    }
  }
    return false;
  }

  logout() {
    this.loginService.logout(); // Chamando o mesmo método de logout no Service (loginService).
    this.router.navigate(['/login']); // Redirecionar para a página de login ou home.
  }


}
