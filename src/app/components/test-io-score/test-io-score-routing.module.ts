import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TestIoScoreComponent } from "./test-io-score.component";

const routes: Routes = [
    {
      path: "testioscore",
      component: TestIoScoreComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestIoScoreRoutingModule { }
