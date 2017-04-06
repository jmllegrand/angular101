import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <jml-products></jml-products>
  `
})
export class AppComponent {
  title: string = 'My first Angular app!';
}
