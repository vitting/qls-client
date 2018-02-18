import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestIoNewUserRoutingModule } from "./test-io-newuser-routing.module";
import {TestIoNewUserComponent} from "./test-io-newuser.component";

@NgModule({
  imports: [
    CommonModule,
    TestIoNewUserRoutingModule
  ],
  declarations: [
    TestIoNewUserComponent
  ]
})
export class TestIoNewUserModule { }
