import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <img src="{{imageUrl}}">
    <jml-products></jml-products>
  `
})
export class AppComponent {
  title: string = 'My first Angular app!';
  imageUrl: string = "https://www.w3schools.com/html/pic_mountain.jpg";
}
