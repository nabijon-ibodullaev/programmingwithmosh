import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsersValidators } from "./users.validators";
@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}

  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      UsersValidators.cannotContainSpace,
      UsersValidators.shouldBeUnique,
    ]),
    password: new FormControl("", Validators.required),
  });
  get username() {
    return this.form.get("username");
  }
  get password() {
    return this.form.get("password");
  }
  ngOnInit(): void {}
}
