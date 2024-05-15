import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchfilterPipe } from 'src/app/client/service/searchfilter.pipe';

import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  declarations: [ClientFormComponent, ClientListComponent, SearchfilterPipe],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ],

  exports: [ClientFormComponent, ClientListComponent],
})
export class ClientModule {}
