import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../login_components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../login_components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: FormControl,
  password: FormControl
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)])
    })
  }

  submit() {
   setTimeout(() => {
   this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
    next: () => {
      this.toastService.success("Login feito com sucesso!");
      this.router.navigate(["home"]);
    },
    error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    });
   }, 3000); // 3000 milissegundos = 3 segundos
  }

  navigate() {
    this.router.navigate(["signup"])
  }

}
