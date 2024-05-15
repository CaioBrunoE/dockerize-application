import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
  }

  public getUserSession(): any {
    return this.loginService.getUserSession();
  }

  public isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  logout() {
    this.loginService.logout(); // Chamando o mesmo método de logout no Service (loginService).
    this.router.navigate(['/login']); // Redirecionar para a página de login ou home.
  }

}
