import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SignupRoutingModule } from "./signup-routing.module";
import { SignupComponent } from "./signup.component";
import { UserService } from "../../services/user.service";
import { ErrorService } from "../../services/error.service";
import { QlsMaterialModule } from "../../QlsMaterial/QlsMaterial.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignupRoutingModule, 
    QlsMaterialModule
  ],
  declarations: [
    SignupComponent
  ],
  providers: [
    UserService,
    ErrorService
  ]
})

export class SignupModule { }
