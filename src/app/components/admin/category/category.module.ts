import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoryRoutingModule } from "./category-routing.module";
import { CategoryComponent } from "./category.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { PopupService } from "../../popup/popup.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule, 
    CategoryRoutingModule
  ],
  declarations: [
    CategoryComponent
  ],
  providers: [PopupService]
})
export class CategoryModule { }
