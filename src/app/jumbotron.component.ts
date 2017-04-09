/**
 * Created by jmlegrand on 08/04/17.
 */

import {Component, Input} from "@angular/core";

@Component({
  selector: "jml-jumbotron",
  template: `
    <div class="jumbotron">
      <h1>
        <ng-content select=".heading"></ng-content>
      </h1>
      <div class="header">{{header}}</div>
      <ng-content></ng-content>
      <div class="footer">{{footer}}</div>


    </div>

  `
})

export class JumboTronComponent {
  @Input() header: string = "this is the header";
  @Input() footer: string = "this is the footer";
}