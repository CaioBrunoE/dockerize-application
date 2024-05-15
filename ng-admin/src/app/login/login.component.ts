import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;
  mensagemSucesso: string = '';
  errors: String[];

  loginForm!: FormGroup;

  constructor( private router: Router,
    private loginService: LoginService,
    ){
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.maxLength(8)])
      })
   }

  onSubmit(){
      this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
       next: () => {
         this.mensagemSucesso = "Login feito com sucesso!";
         this.router.navigate(["home"]);
       },
       error: () => this.errors = ["Erro inesperado! Tente novamente mais tarde"]
       });
     }

  }

