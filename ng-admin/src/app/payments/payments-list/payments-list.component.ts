import { Component, OnInit } from '@angular/core';
import { Payment } from '../payments-model/payment';
import { PaymentServiceService } from '../service/payment-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.css']
})
export class PaymentsListComponent implements OnInit {

  totalLength: any;
  page: number = 1;

  searchValuepayment: any;

  payments: Payment[] = [];
  selectedPayment: Payment;
  successMessage: string;
  errorMessage: string;
  currentDate: Date = new Date();


  constructor(
    private servicePayment: PaymentServiceService,
    private router: Router) {}

  ngOnInit(): void {
    this.servicePayment
      .findAll()
      .subscribe( response => this.payments = response);
  }

  createPayment() {
    this.router.navigate(['/payment/form'])
  }



  deletePayment() {
    this.servicePayment.deleteId(this.selectedPayment)
      .subscribe(
          response => {
            this.successMessage = 'Pagamento excluído com sucesso!';
            window.location.reload();
          },
          error => {
            console.error('Erro ao excluir o pagamneto:', error);
            this.errorMessage = 'Erro ao excluir pagamneto: ' + error.message;
          }
      );
  }
}
