import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsFormComponent } from './payments-form/payments-form.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';



const routes: Routes = [
  {path:"payment/list",component:PaymentsListComponent},
  {path:"payment/form",component:PaymentsFormComponent},
  { path: 'payment/form/:id', component: PaymentsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
