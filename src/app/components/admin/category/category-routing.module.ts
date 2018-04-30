import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CategoryComponent } from "./category.component";
import { CanActiveAuthUser } from "../../../services/auth-guard.service";

const routes: Routes = [
    {
      path: "admin/:id/category",
      component: CategoryComponent,
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
export class CategoryRoutingModule { }
