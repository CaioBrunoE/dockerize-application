import localePt from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
registerLocaleData(localePt)
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule
  ],

  exports: [],
})
export class NavbarModule { }
