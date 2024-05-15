import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.css'
})
export class DefaultLoginLayoutComponent implements OnInit{

  constructor(private router: Router) {}

  currentScreen: string = 'login'; 

  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();


  ngOnInit(): void {
    this.setCurrentScreen();
  }

  setCurrentScreen(): void {
    const currentUrl = this.router.url;
    this.currentScreen = currentUrl.includes('signup') ? 'signup' : 'login';
  }


  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }

}
