import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestIoAdminRoutingModule } from "./test-io-admin-routing.module";
import {TestIoAdminComponent} from "./test-io-admin.component";

@NgModule({
  imports: [
    CommonModule,
    TestIoAdminRoutingModule
  ],
  declarations: [
    TestIoAdminComponent
  ]
})
export class TestIoAdminModule { }
