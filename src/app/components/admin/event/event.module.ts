import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventRoutingModule } from "./event-routing.module";
import { EventComponent } from "./event.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PopupService } from "../../popup/popup.service";
import { UtilityService } from "../../../services/utility.service";
import { UserMetaService } from "../../../services/usermeta.service";
import { QlsMaterialModule } from "../../../QlsMaterial/QlsMaterial.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QlsMaterialModule,
    EventRoutingModule
  ],
  declarations: [
    EventComponent
  ],
  providers: [
    PopupService,
    UtilityService,
    UserMetaService
  ]
})
export class EventModule { }
