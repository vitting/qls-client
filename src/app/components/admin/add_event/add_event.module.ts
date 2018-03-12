import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddEventRoutingModule } from "./add_event-routing.module";
import { AddEventComponent } from "./add_event.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    NgbModule, 
    AddEventRoutingModule
  ],
  declarations: [
    AddEventComponent
  ]
})
export class AddEventModule { }
