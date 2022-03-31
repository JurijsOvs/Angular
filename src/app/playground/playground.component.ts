import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pro-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
source: string = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe( data => {
this.source = data.pic
    })
  }

}
