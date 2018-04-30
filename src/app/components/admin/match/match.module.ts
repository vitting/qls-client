import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatchRoutingModule } from "./match-routing.module";
import { MatchComponent } from "./match.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { PopupService } from "../../popup/popup.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule, 
    MatchRoutingModule
  ],
  declarations: [
    MatchComponent
  ],
  providers: [PopupService]
})
export class MatchModule { }
