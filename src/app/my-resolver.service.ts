import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyResolverService implements Resolve<any>{

  constructor(private http: HttpClient) { }

  resolve() {
    const url = 'https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true';
    return this.http.get(url);
  }
}
