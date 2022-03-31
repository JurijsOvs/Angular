import { Component } from '@angular/core';
import { article } from 'src/assets/data';

@Component({
  selector: 'pro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 articleFromParent: string = article
}
