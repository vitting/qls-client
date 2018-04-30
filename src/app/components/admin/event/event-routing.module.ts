import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EventComponent } from "./event.component";
import { CanActiveAuthUser } from "../../../services/auth-guard.service";

const routes: Routes = [
    {
      path: "admin/:id/event",
      component: EventComponent,
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
export class EventRoutingModule { }
