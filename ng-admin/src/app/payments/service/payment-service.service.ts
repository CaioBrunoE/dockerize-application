import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../payments-model/payment';
import { StatusPayment } from '../payments-model/status';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor( private http: HttpClient ) { }

  save( payment: Payment ) : Observable<Payment> {
    return this.http.post<Payment>('http://localhost:9002/api/payments', payment);
  }

  update( payment: Payment ) : Observable<any> {
    return this.http.put<Payment>(`http://localhost:9002/api/payments/${payment.id}`, payment);
  }

  findAll() : Observable<Payment[]> {
    return this.http.get<Payment[]> ('http://localhost:9002/api/payments');
  }

  getById( id: string ) : Observable<Payment> {
    return this.http.get<any> (`http://localhost:9002/api/payments/${id}`);
  }

  deleteId( payment : Payment ) : Observable<any> {
    return this.http.delete<any>(`http://localhost:9002/api/payments/${payment.id}`);
  }

  findAllStatusPayment() : Observable<StatusPayment[]> {
    return this.http.get<StatusPayment[]> ('http://localhost:9002/api/payments/liststauspayments');
  }

  findAllMetodPayment() : Observable<StatusPayment[]> {
    return this.http.get<StatusPayment[]> ('http://localhost:9002/api/payments/listpaymentMethod');
  }

}
