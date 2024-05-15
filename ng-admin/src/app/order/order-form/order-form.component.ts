import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Order } from '../model/order';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  order: Order;
  success: boolean = false;
  errors: string[];
  id: string;

  orders: Order[] = [];
  selectedClient: Order;
  successMessage: string;
  errorMessage: string;

  constructor(
    private service: OrderService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.order = new Order();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getById(this.id).subscribe(
          (response) => (this.order = response),
          (errorResponse) => (this.order = new Order())
        );
      }
    });
  }

  returnList() {
    this.router.navigate(['/order-list']);
  }

  onSubmit() {
    if (this.id) {
      this.service.update(this.order).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
        },
        (errorResponse) => {
          this.errors = ['Erro ao Atualizar Cliente'];
        }
      );
    } else {
      this.service.save(this.order).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.order = response;
        },
        (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error;
          console.log(errorResponse.error);
        }
      );
    }
  }

  confirmDeletion(client: Order) {
    this.selectedClient = client;
  }

  deleteOrder() {
    this.service.deleteId(this.selectedClient).subscribe(
      (response) => {
        this.successMessage = 'Cliente excluído com sucesso!';
        // Recarregar a página
        window.location.reload();
      },
      (error) => {
        console.error('Erro ao excluir cliente:', error);
        this.errorMessage = 'Erro ao excluir cliente: ' + error.message;
      }
    );
  }
}
