import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "angularfire2/auth";
import { UserService } from "../../services/user.service";

@Component({
  selector: "qls-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  model = {
    "name": "Christian Nicolaisen",
    "email": "cvn@nymail.dk",
    "mobile": "34344334",
    "password": "1235"
  };

  signupForm: FormGroup;

  constructor(private _fb: FormBuilder, private _userService: UserService) { }

  ngOnInit() {
    this.signupForm = this._fb.group({
      "name": ["", Validators.required],
      "email": ["", Validators.required],
      "mobile": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }

  submit() {
    this._userService.createUser(this.model.email, this.model.password);

    if (this.signupForm.valid) {

    }
  }
}
