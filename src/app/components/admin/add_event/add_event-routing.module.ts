import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddEventComponent } from "./add_event.component";
import { CanActiveAuthUser } from "../../../services/auth-guard.service";

const routes: Routes = [
    {
      path: "admin/addevent",
      component: AddEventComponent,
      canActivate: [CanActiveAuthUser]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CanActiveAuthUser
  ]
})
export class AddEventRoutingModule { }
