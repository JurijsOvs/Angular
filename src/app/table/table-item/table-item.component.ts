import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { User } from '../table.component';

@Component({
  selector: 'pro-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit {
  user: any;
  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.httpService.getUser(params.id).subscribe(response => {
        this.user = response;
      })
    })
  }

}
