import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'pro-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
users: User[] = [];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getAllUsers().subscribe((response: User[]): void => {
      this.users = response;
    })
  }


  showUser(id: number): void {
    this.httpService.getUser(id).subscribe( (response: User): void => {
      console.log(response);
    })
  }
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}