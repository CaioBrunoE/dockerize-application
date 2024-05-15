import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientService } from './client/service/client.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserModule } from './user/user.module';
import { UserService } from './user/service/user.service';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/services/login.service';
import { PaymentsModule } from './payments/payments.module';
import { ServiceService } from './service/service/service.service';
import { ServiceModule } from './service/service.module';

import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ClientModule } from './client/client.module';
import { ProductService } from './product/service/product.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/model/category.module';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientModule,
    UserModule,
    ServiceModule,
    NgxPaginationModule,
    LoginModule,
    PaymentsModule,
    ProductModule,
    CategoryModule
  ],

  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    ServiceService,
    ClientService,
    ProductService,
    UserService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

