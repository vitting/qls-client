import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestIoRoutingModule } from "./test-io-routing.module";
import {TestIoComponent} from "./test-io.component";

@NgModule({
  imports: [
    CommonModule,
    TestIoRoutingModule
  ],
  declarations: [
    TestIoComponent
  ]
})
export class TestIoModule { }
