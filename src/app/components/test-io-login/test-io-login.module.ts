import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestIoLoginRoutingModule } from "./test-io-login-routing.module";
import {TestIoLoginComponent} from "./test-io-login.component";

@NgModule({
  imports: [
    CommonModule,
    TestIoLoginRoutingModule
  ],
  declarations: [
    TestIoLoginComponent
  ]
})
export class TestIoLoginModule { }
