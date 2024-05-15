import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServicessearchfilterPipe } from './service/servicessearchfilter.pipe';
import { ServiceRoutingModule } from './service-routing.module';



@NgModule({
  declarations:[
    ServiceFormComponent,
    ServiceListComponent,
    ServicessearchfilterPipe
  ],
  imports:[
    CommonModule,
    ServiceRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports:[
    ServiceFormComponent,
    ServiceListComponent
  ],
  providers:[
    
  ]
})
export class ServiceModule {}
