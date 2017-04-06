import {Component} from "@angular/core";
/**
 * Created by jmlegrand on 05/04/17.
 */


@Component({
  selector: "jml-products",
  template: `
    <h2>welcome to the list of products</h2>
    <ul>
      <li *ngFor="let product of products">
        <span>{{product}}</span>
      </li>
    </ul>
  `
})

export class ProductsComponent {

  products: Array<String> = ["Learning Angular", "Pro Angular"];

}