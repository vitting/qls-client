import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "qls-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  model = {
    "name": "",
    "username": "",
    "mobile": "",
    "password": ""
  };

  signupForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this._fb.group({
      "name": ["", Validators.required],
      "username": ["", Validators.required],
      "mobile": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }

  submit() {

  }
}
