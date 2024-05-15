import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../model/payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesPayment {

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Payment[]>("http://localhost:9002/api/payments")
  }

  getByid(id:number){
    return this.http.get<Payment>(`http://localhost:9002/api/payments/${id}`)
  }

  create(payment: any){
    return this.http.post<Payment>(`http://localhost:9002/api/payments`, payment)
  }

  update(id:string ,payment: any){
    return this.http.put<Payment>(`http://localhost:9002/api/payments/${id}`, payment)
  }

  delete(id:string){
    return this.http.delete<void>(`http://localhost:9002/api/payments/${id}`)
  }

  getQrCode(valor: string) {
    return this.http.get('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + valor, {responseType: 'blob'});
  }
}
