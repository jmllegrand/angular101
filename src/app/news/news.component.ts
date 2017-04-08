import {Component, Input, OnInit} from '@angular/core';
import {NewsService} from "../news.service";

@Component({
  selector: 'jml-news',
  template: `
    <div class="media">
      <div class="media-left">
        <a href="#">
          <img style="width: 300px" class="media-object" src="{{data.imageUrl}}">
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{data.title}}</h4>
        {{data.released | date: "dd/MM/yy"}}
        <jml-rating [rating]="data.rating" [numberViews]="data.numberViews"></jml-rating>
        <br>
        {{data.description}}
      </div>
    </div>
  `,
  styles: [`
    .media {
      margin-bottom: 20px;
    }
  `]
})
export class NewsComponent implements OnInit {

  @Input() data: any;

  constructor() {
  }

  ngOnInit() {
  }

}
