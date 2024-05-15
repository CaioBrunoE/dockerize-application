import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID, OnInit } from '@angular/core';
import { Order } from './model/order';
import {  ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './service/order.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ CommonModule, FormsModule,
    HttpClientModule, RouterModule],
  providers: [
      { provide: LOCALE_ID, useValue: 'pt' },
      { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
      CurrencyPipe
    ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];

  

  ordersReversed: Order[] = [];

  searchValue: any;
  public valor: number = 1;

  constructor(private service: OrderService, private router: Router, public route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((response) => {(this.orders = response); this.ordersReversed = [...this.orders].reverse(); this.valor = this.orders.length;});
  }

  detailOrder() {
    this.router.navigateByUrl('/detail-order');
  }

  aumentarValor() {
    this.valor++;
  }



}
