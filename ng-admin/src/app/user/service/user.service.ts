import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  findAll() : Observable<User[]> {
    return this.http.get<User[]> ('http://localhost:9004/api/users');
  }

  save( user: User ) : Observable<User> {
    return this.http.post<User>('http://localhost:9004/api/users', user);
  }

  update( user: User) : Observable<any> {
    return this.http.put<User>(`http://localhost:9004/api/users/${user.id}`, user);
  }

  getById( id: string ) : Observable<User> {
    return this.http.get<any> (`http://localhost:9004/api/users/getId/${id}`);
  }

  deleteId( user : User ) : Observable<any> {
    return this.http.delete<any>(`http://localhost:9004/api/users/${user.id}`);
  }

}
