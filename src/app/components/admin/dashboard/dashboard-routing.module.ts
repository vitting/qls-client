import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { CanActiveAuthUser } from "../../../services/auth-guard.service";

const routes: Routes = [
    {
      path: "admin/dashboard",
      component: DashboardComponent,
      canActivate: [CanActiveAuthUser]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanActiveAuthUser]
})
export class DashboardRoutingModule { }
