import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddMatchComponent } from "./add_match.component";

const routes: Routes = [
    {
      path: "admin/addmatch",
      component: AddMatchComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMatchRoutingModule { }
