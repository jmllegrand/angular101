import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <img src="{{imageUrl}}">
    <jml-products></jml-products>
    <button class="btn btn-primary" [class.disabled]="!isValid">Submit</button>
    <button (click)="onClickMe($event)">Toggle</button>

  `
})
export class AppComponent {
  title: string = 'My first Angular app!';
  imageUrl: string = "https://www.w3schools.com/html/pic_mountain.jpg";
  isValid: boolean = false;

  onClickMe($event: any) {
    console.log("an event has been fired", $event);
    this.isValid = !this.isValid;
  }

}
