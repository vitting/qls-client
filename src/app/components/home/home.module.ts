import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
