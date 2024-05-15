import { CommonModule} from '@angular/common';

import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { ProductSearchfilterPipe } from './service/productsearchfilter.pipe';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import ptBr from  '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';



registerLocaleData(ptBr);

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductListComponent,
    ProductSearchfilterPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    NgxPaginationModule,

  ],

  exports: [
    ProductFormComponent,
    ProductListComponent
  ],
  providers: [
      { provide: LOCALE_ID,  useValue: 'pt'},
  ],
})
export class ProductModule { }
