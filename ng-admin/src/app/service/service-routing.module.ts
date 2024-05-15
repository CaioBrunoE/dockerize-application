import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceListComponent } from './service-list/service-list.component';

const routes: Routes = [
  {
    path: 'service-form',
    component: ServiceFormComponent
  },
  {
    path: 'service-form/:id',
    component: ServiceFormComponent
  },
  {
    path: 'service-list',
    component: ServiceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
