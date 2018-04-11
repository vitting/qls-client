import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SignupRoutingModule } from "./signup-routing.module";
import { SignupComponent } from "./signup.component";
import { UserService } from "../../services/user.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignupRoutingModule
  ],
  declarations: [
    SignupComponent
  ],
  providers: [
    UserService
  ]
})

export class SignupModule { }
