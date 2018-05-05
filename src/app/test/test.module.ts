import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRoutingModule } from "./test-routing.module";
import {TestComponent} from "./test.component";
import { UserMetaService } from "../services/usermeta.service";

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  declarations: [
    TestComponent
  ],
  providers: [
    UserMetaService
  ]
})

export class TestModule { }
