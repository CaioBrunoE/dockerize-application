import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { AuthGuardService } from '../login/services/auth-guard.service';

const routes: Routes = [
  { path: 'client-form', component: ClientFormComponent, canActivate: [AuthGuardService]},
  { path: 'client-form/:id', component: ClientFormComponent, canActivate: [AuthGuardService] },
  { path: 'client-list', component: ClientListComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
