import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRoutingModule } from "./test-routing.module";
import {TestComponent} from "./test.component";
import { UserMetaService } from "../services/usermeta.service";
import { QlsMaterialModule } from "../QlsMaterial/QlsMaterial.module";

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    QlsMaterialModule
  ],
  declarations: [
    TestComponent
  ],
  providers: [
    UserMetaService
  ]
})

export class TestModule { }
