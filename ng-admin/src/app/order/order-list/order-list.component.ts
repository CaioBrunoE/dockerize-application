import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from '../model/order';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  totalLength: any;
  page: number = 1;

  searchValue: any;

  orders: Order[] = [];
  selectedOrder: Order;
  successMessage: string;
  errorMessage: string;

  constructor(private service: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((response) => (this.orders = response));
  }

  createOrder() {
    this.router.navigate(['/order-form']);
  }

}
