import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddMatchComponent } from "./add_match.component";
import { CanActiveAuthUser } from "../../../services/auth-guard.service";

const routes: Routes = [
    {
      path: "admin/addmatch",
      component: AddMatchComponent,
      canActivate: [CanActiveAuthUser]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanActiveAuthUser]
})
export class AddMatchRoutingModule { }
