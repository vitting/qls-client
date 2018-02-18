import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TestIoAdminComponent } from "./test-io-admin.component";

const routes: Routes = [
    {
      path: "testioadmin",
      component: TestIoAdminComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestIoAdminRoutingModule { }
