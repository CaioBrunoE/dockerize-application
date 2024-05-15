import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Order } from '../model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:9007/api/orders');
  }

  save(order: Order): Observable<Order> {
    return this.http.post<Order>('http://localhost:9007/api/orders', order);
  }

  update(order: Order): Observable<any> {
    return this.http.put<Order>(`http://localhost:9007/api/orders/${order.id}`,
      order
    );
  }

  getById(id: string): Observable<Order> {
    return this.http.get<any>(`http://localhost:9007/api/orders/getId/${id}`);
  }

  deleteId(order: Order): Observable<any> {
    return this.http.delete<any>(`http://localhost:9007/api/orders/${order.id}`
    );
  }
}
