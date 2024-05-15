import { Component, OnInit } from '@angular/core';
import { Payment } from '../payments-model/payment';
import { PaymentServiceService } from '../service/payment-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StatusPayment } from '../payments-model/status';
import { Method } from '../payments-model/method';

@Component({
  selector: 'app-payments-form',
  templateUrl: './payments-form.component.html',
  styleUrls: ['./payments-form.component.css']
})
export class PaymentsFormComponent implements OnInit {
  payment:Payment;
  status:StatusPayment[] = [];
  methods: Method[] = [];
  selectedPayment: Payment;

  success: boolean = false;
  errors: string[];
  successMessage: string;
  errorMessage: string;

  id: string;

  constructor(
    private servicePayment: PaymentServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.payment = new Payment();
  }

  ngOnInit(): void {

    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams["id"];
      if (this.id) {
        this.servicePayment.getById(this.id).subscribe(
          (response) => (this.payment = response),
          (errorResponse) => (this.payment = new Payment())
        );
      }
    });

   this.findStatus();
   this.findMethod();
  }

  returnList() {
    this.router.navigate(["payment/list"]);
  }

  onSubmit() {
    if (this.id) {
      this.servicePayment.update(this.payment).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
        },
        (errorResponse) => {
          this.errors = ["Erro ao Atualizar pagamentos"];
        }
      );
    } else {
      this.servicePayment.save(this.payment).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.payment = response;
        },
        (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error;
          console.log(errorResponse.error);
        }
      );
    }
  }
  confirmDeletion(payments : Payment) {
    this.selectedPayment = payments;
  }

  findStatus(){
    this.servicePayment
      .findAllStatusPayment()
      .subscribe( response => this.status = response);
  }
  findMethod(){
    this.servicePayment
      .findAllMetodPayment()
      .subscribe( response => this.methods = response);
  }

  deletePayment() {
    this.servicePayment.deleteId(this.selectedPayment)
      .subscribe(
          response => {
            this.successMessage = 'Pagamento excluído com sucesso!';
            // Recarregar a página
            window.location.reload();
          },
          error => {
            console.error('Erro ao excluir o pagamneto:', error);
            this.errorMessage = 'Erro ao excluir pagamneto: ' + error.message;
          }
      );
    }
}
