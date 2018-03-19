import { Component } from "@angular/core";
import { PopupButtonsType } from "./components/popup/popup.enums";

@Component({
  selector: "qls-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  buttonsType: PopupButtonsType = PopupButtonsType.YesNo;

  buttonResponse(value) {
    console.log(value);
  }
}
