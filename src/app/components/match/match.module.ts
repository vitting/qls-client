import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatchRoutingModule } from "./match-routing.module";
import {MatchComponent} from "./match.component";

@NgModule({
  imports: [
    CommonModule,
    MatchRoutingModule
  ],
  declarations: [
    MatchComponent
  ]
})

export class MatchModule { }
