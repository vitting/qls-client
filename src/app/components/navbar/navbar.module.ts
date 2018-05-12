import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar.component";
import { RouterModule } from "@angular/router";
import { UserService } from "../../services/user.service";
import { QlsMaterialModule } from "../../QlsMaterial/QlsMaterial.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    QlsMaterialModule
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
