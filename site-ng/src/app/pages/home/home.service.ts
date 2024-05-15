import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product/model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  findByOffer(offer: boolean): Observable<Product[]>{
    return this.http.get<Product[]> (`http://localhost:9006/api/products/findByOffer/${offer}`);
  }

}
