import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestIoScoreRoutingModule } from "./test-io-score-routing.module";
import {TestIoScoreComponent} from "./test-io-score.component";

@NgModule({
  imports: [
    CommonModule,
    TestIoScoreRoutingModule
  ],
  declarations: [
    TestIoScoreComponent
  ]
})
export class TestIoScoreModule { }
