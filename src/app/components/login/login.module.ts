import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { QlsMaterialModule } from "../../QlsMaterial/QlsMaterial.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    QlsMaterialModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
