import { Component, DEFAULT_CURRENCY_CODE, HostListener, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OrderService } from '../order/service/order.service';
import { Order } from '../order/model/order';
import { ProductService } from '../product/product.service';
import { Product } from '../product/model/product';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    CurrencyPipe
  ],
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  isScrolled: boolean = false;

  orderId: string | null;
  order: Order | undefined;
  indiceFinalDeI: number;

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.indiceFinalDeI = 0;
    this.orderId = this.route.snapshot.paramMap.get('id');

    if (this.orderId !== null) {
      this.orderService.findById(this.orderId).subscribe((response) => {
        this.order = response;
        this.updateFinalIndex();
      });
    } else {
      console.error('ID do pedido não fornecido na rota.');
    }
  }

  getTotalOrderPrice(): number {
    if (!this.order || !Array.isArray(this.order.orderItems)) {
      return 0;
    }
    return this.order.orderItems.reduce((total: number, item: any) => total + (item.price * item.quantity), 0);
  }

  updateFinalIndex(): void {
    this.indiceFinalDeI = this.order?.orderItems?.length || 0;
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 300) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
