import {Component, OnInit} from '@angular/core';
import {NewsService} from "./news.service";

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <img src="{{imageUrl}}">
    <jml-products></jml-products>
    <button class="btn btn-primary" [class.disabled]="!isValid">Submit</button>
    <button (click)="onClickMe($event)">Toggle</button> <br>
    <jml-rating [rating]="3" [numberViews]="34500"></jml-rating> <br>

    <jml-jumbotron [header]="'myheader'" [footer]="'my footer'">
      <div class="card-block">
        <h4 class="heading">You can put any content here</h4>
        <p class="body">For example this line of text and</p>
        <a href="#" class="button">This button</a>
      </div>
    </jml-jumbotron>
    <div *ngIf="news.length; else noNewsBlock">
      <ul>
        <li *ngFor="let aNews of news">
          <jml-news [data]="aNews"></jml-news>
        </li>
      </ul>
    </div>

    <ng-template #noNewsBlock>
      <span>No product to display</span>
    </ng-template>


  `
})

export class AppComponent implements OnInit {
  title: string = 'My first Angular app!';
  imageUrl: string = "https://www.w3schools.com/html/pic_mountain.jpg";
  isValid: boolean = false;
  news: Array<any> = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.news = this.newsService.getNews();
    // this.news = [];
  }

  onClickMe($event: any) {
    console.log("an event has been fired", $event);
    this.isValid = !this.isValid;
  }

}
