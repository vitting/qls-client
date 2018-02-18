import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TestIoNewUserComponent } from "./test-io-newuser.component";

const routes: Routes = [
    {
      path: "testionewuser",
      component: TestIoNewUserComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestIoNewUserRoutingModule { }
