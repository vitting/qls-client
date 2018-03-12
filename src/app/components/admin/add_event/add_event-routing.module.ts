import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddEventComponent } from "./add_event.component";

const routes: Routes = [
    {
      path: "addevent",
      component: AddEventComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEventRoutingModule { }
