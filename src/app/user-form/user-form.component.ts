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
          <input type="text" class="form-control" id="firstName" required>
        </div>

        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" class="form-control" id="lastName" required>
        </div>

        <button type="submit" class="btn btn-default">Submit</button>

      </form>
    </div>
  `,
  styles: []
})
export class UserFormComponent implements OnInit {

  countries: Array<string> = ["US", "France", "India", "Japan"];
  model: User = new User("jm", 'legrand');

  constructor() {
  }

  ngOnInit() {
  }

}
