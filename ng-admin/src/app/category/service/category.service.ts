import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Category } from '../category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http: HttpClient ) { }

  save( category: Category ) : Observable<Category> {
    return this.http.post<Category>('http://localhost:9003/api/category/create', category);
  }

  update( category: Category ) : Observable<any> {
    return this.http.put<Category>(`http://localhost:9003/api/category/update/${category.id}`, category);
  }

  findAll() : Observable<Category[]> {
    return this.http.get<Category[]> ('http://localhost:9003/api/category/findAll');
  }

  findByProduct() : Observable<Category[]> {
    return this.http.get<Category[]> ('http://localhost:9003/api/category/findByTypeProduct');
  }

  findByService() : Observable<Category[]> {
    return this.http.get<Category[]> ('http://localhost:9003/api/category/findByTypeService');
  }

  getById( id: string ) : Observable<Category> {
    return this.http.get<any> (`http://localhost:9003/api/category/search/${id}`);
  }

  deleteId( category : Category ) : Observable<any> {
    return this.http.delete<any>(`http://localhost:9001/api/category/delete/${category.id}`);
  }
}
