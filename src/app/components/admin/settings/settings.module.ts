import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { UserService } from "../../../services/user.service";
import { QlsMaterialModule } from "../../../QlsMaterial/QlsMaterial.module";

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    QlsMaterialModule
  ],
  declarations: [
    SettingsComponent
  ],
  providers: [
    UserService
  ]
})
export class SettingsModule { }
