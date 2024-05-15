import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersearchfilterPipe } from './service/usersearchfilter.pipe';


@NgModule({
  declarations: [
   UserFormComponent,
   UserListComponent,
   UsersearchfilterPipe
  ],


  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],

  exports: [
   UserFormComponent,
   UserListComponent
  ]
})
export class UserModule { }
