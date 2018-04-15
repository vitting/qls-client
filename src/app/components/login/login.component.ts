import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { PopupService } from "../popup/popup.service";
import { PopupButtonsType, PopupButtonResponse } from "../popup/popup.enums";


@Component({
  selector: "qls-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private userService: UserService,
    private popupService: PopupService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      "email": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }

  submit() {
    if (this.loginForm.valid) {
      this.userService.signInUser(this.loginForm.value.email, this.loginForm.value.password).then((d) => {
        this.popupService.popupMessage(true, {
          body: "You are logged in. Go to your dashboard.",
          buttons: PopupButtonsType.Ok
        });

        this.popupService.popupResponse$.subscribe((res) => {
          if (res === PopupButtonResponse.Ok) {
            this.popupService.popupMessage(false);
            this.router.navigate(["/admin/dashboard"]); 
          }
        });
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
