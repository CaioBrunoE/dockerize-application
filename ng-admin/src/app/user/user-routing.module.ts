import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuardService } from '../login/services/auth-guard.service';



const routes: Routes = [
  { path: 'user-form', component: UserFormComponent, canActivate: [AuthGuardService] },
  { path: 'user-form/:id', component: UserFormComponent, canActivate: [AuthGuardService] },
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
