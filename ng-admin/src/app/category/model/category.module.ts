import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from '../category-routing.module';
import { FormsModule } from '@angular/forms';
import { CategorySearchfilterPipe } from '../service/categorysearchfilter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoryListComponent } from '../category-list/category-list.component';
import { CategoryFormComponent } from '../category-form/category-form.component';




@NgModule({
  declarations: [
    CategorySearchfilterPipe,

    CategoryListComponent,
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    CategoryListComponent,
    CategoryFormComponent
  ]
})
export class CategoryModule { }
