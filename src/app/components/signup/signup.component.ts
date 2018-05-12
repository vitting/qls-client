import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";

@Component({
  selector: "qls-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
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
    if (this.signupForm.valid) {
      this._userService.createUser(this.signupForm.value).then((d) => {
        console.log(d.toString());
      }).catch((e) => {
        console.log(e.toString());
      });
    }
  }
}
