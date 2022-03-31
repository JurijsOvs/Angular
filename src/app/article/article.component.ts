import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators'
import { HelperService } from '../helper.service';

@Component({
  selector: 'pro-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
@Input() articleFromChild: string = 'default text';
underlineBool: boolean  = false;
orangeBool: boolean  = false;
centerBool: boolean  = false;
  constructor(public helper: HelperService) { }

  ngOnInit(): void {
  }

generateToken(): void {
  this.helper.token = 10;
  const number = interval(1000);
  const takeNumbers = number.pipe(take(10))
  takeNumbers.subscribe(x => {
    this.helper.token -= 1;
  })
}

}
