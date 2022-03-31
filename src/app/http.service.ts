import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './table/table.component';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { 

  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  saveUser(data: any): Observable<unknown> {
    return this.http.post<unknown>(`https://jsonplaceholder.typicode.com/users`, data);
  }

  editUser(data: any, id: number): Observable<unknown> {
    return this.http.put<unknown>(`https://jsonplaceholder.typicode.com/users/${id}`, data);
  }
}
