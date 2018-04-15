import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar.component";
import { RouterModule } from "@angular/router";
import { UserService } from "../../services/user.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
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
