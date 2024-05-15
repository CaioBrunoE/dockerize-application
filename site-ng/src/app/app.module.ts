import localePt from '@angular/common/locales/pt';

import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import pt from '@angular/common/locales/pt';


registerLocaleData(pt);

import { AppRoutingModule } from './app.routes';
import { NavbarModule } from './template/navbar.module';
registerLocaleData(localePt);
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    NavbarModule,
    FormsModule,

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    CurrencyPipe,
  ]
})

export class AppModule {}
