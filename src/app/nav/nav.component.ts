import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pro-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
selectedItem: string = 'article';
  constructor() { }

  ngOnInit(): void {
  }

}
