import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddEventRoutingModule } from "./add_event-routing.module";
import { AddEventComponent } from "./add_event.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule, 
    AddEventRoutingModule
  ],
  declarations: [
    AddEventComponent
  ],
  providers: []
})
export class AddEventModule { }
