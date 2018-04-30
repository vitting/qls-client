import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventRoutingModule } from "./event-routing.module";
import { EventComponent } from "./event.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { PopupService } from "../../popup/popup.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule, 
    EventRoutingModule
  ],
  declarations: [
    EventComponent
  ],
  providers: [PopupService]
})
export class EventModule { }
