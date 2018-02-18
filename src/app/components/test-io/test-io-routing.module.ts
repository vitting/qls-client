import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TestIoComponent } from "./test-io.component";

const routes: Routes = [
    {
      path: "testio",
      component: TestIoComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestIoRoutingModule { }
