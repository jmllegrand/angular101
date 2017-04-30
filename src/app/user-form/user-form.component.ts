import {Component, OnInit} from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'jml-user-form',
  template: `
    <div class="container">
      <h1>User Form</h1>
      <form>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" class="form-control" id="firstName" required
                 [(ngModel)]="model.firstName" name="firstName">
        </div>

        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" class="form-control" id="lastName" required>
        </div>

        <div class="form-group">
          <label for="country">Country</label>
          <input type="text" class="form-control" id="country">
          <select class="form-control" id="country">
            <option *ngFor="let country of countries" [value]="country">{{country}}</option>
          </select>
        </div>

        <button type="submit" class="btn btn-default">Submit</button>

      </form>
    </div>
  `,
  styles: []
})
export class UserFormComponent implements OnInit {

  countries: Array<string> = ["France", "US", "India", "Japan"];
  model: User = new User("jm", 'legrand');

  constructor() {
  }

  ngOnInit() {
  }

}
