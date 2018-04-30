import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MatchComponent } from "./match.component";
import { CanActiveAuthUser } from "../../../services/auth-guard.service";

const routes: Routes = [
    {
      path: "admin/:id/match",
      component: MatchComponent,
      canActivate: [CanActiveAuthUser]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanActiveAuthUser]
})
export class MatchRoutingModule { }
