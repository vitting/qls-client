import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "qls-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  model = {
    "username": "",
    "password": ""
  };
  loginForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      "username": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }

  submit() {

  }
}
