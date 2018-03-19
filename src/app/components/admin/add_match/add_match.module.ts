import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddMatchRoutingModule } from "./add_match-routing.module";
import { AddMatchComponent } from "./add_match.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule, 
    AddMatchRoutingModule
  ],
  declarations: [
    AddMatchComponent
  ]
})
export class AddMatchModule { }
