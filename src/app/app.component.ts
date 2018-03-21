import { Component, OnInit } from "@angular/core";
import { PopupButtonsType } from "./components/popup/popup.enums";
import { PopupService } from "./components/popup/popup.service";

@Component({
  selector: "qls-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  buttonsType: PopupButtonsType = PopupButtonsType.YesNo;
  constructor() {}

  buttonResponse(value) {
    console.log(value);
  }

  
}
