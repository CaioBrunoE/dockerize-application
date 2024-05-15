import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsFormComponent } from './payments-form/payments-form.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { ClientRoutingModule } from 'src/app/client/client-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaymentsSearchfilterPipe} from './service/searchfilter.pipe';
import { PaymentRoutingModule } from './payment-routing.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);


@NgModule({
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  declarations: [
    PaymentsFormComponent,
    PaymentsListComponent,
    PaymentsSearchfilterPipe


  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    NgxPaginationModule,
    PaymentRoutingModule

  ],
  exports: [
    PaymentsFormComponent,
    PaymentsListComponent
  ]
})
export class PaymentsModule { }
