import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TestIoLoginComponent } from "./test-io-login.component";

const routes: Routes = [
    {
      path: "testiologin",
      component: TestIoLoginComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestIoLoginRoutingModule { }
