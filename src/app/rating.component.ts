/**
 * Created by jmlegrand on 07/04/17.
 */

import {Component} from "@angular/core";
@Component({
  selector: "jml-rating",
  template: `
    <i class="glyphicon"
       [class.glyphicon-star-empty]="rating < 1"
       [class.glyphicon-star]="rating >= 1" (click)="onClick(1)">
    </i>

    <i class="glyphicon"
       [class.glyphicon-star-empty]="rating < 2"
       [class.glyphicon-star]="rating >= 2" (click)="onClick(2)">
    </i>

    <i class="glyphicon"
       [class.glyphicon-star-empty]="rating < 3"
       [class.glyphicon-star]="rating >= 3" (click)="onClick(3)">
    </i>

    <i class="glyphicon"
       [class.glyphicon-star-empty]="rating < 4"
       [class.glyphicon-star]="rating >= 4" (click)="onClick(4)">
    </i>

    <i class="glyphicon"
       [class.glyphicon-star-empty]="rating < 5"
       [class.glyphicon-star]="rating >= 5" (click)="onClick(5)">
    </i>
  `
})

export class RatingComponent {

  rating: number = 0;

  constructor() {
  }

  onClick(value: number) {
    console.log("onClick", value);
    this.rating = value;
  }
}