import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatchRoutingModule } from "./match-routing.module";
import { MatchComponent } from "./match.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { PopupService } from "../../popup/popup.service";
import { UtilityService } from "../../../services/utility.service";

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
  providers: [
    PopupService,
    UtilityService
  ]
})
export class MatchModule { }
