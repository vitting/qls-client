import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PopupButtonsType, PopupButtonResponse } from "./popup.enums";

@Component({
  selector: "qls-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"]
})
export class PopupComponent implements OnInit {
  @Input() show = false;
  @Input() header = "";
  @Input() body = "";
  @Input() buttons: PopupButtonsType = PopupButtonsType.YesNo;
  @Output() response = new EventEmitter<PopupButtonResponse>();
  showYesButton = true;
  button1Text = "";
  button2Text = "";
  button1Response: PopupButtonResponse;
  button2Response: PopupButtonResponse;

  constructor() { }

  ngOnInit() {
    if (this.buttons === PopupButtonsType.Ok) {
      this.showYesButton = false;
      this.button2Text = "Ok";
      this.button2Response = PopupButtonResponse.Ok;      
    } else if (this.buttons === PopupButtonsType.OkCancel) {
      this.showYesButton = true;
      this.button1Text = "Ok";
      this.button2Text = "Cancel";
      this.button1Response = PopupButtonResponse.Ok;      
      this.button2Response = PopupButtonResponse.Cancel;
    } else if (this.buttons === PopupButtonsType.YesCancel) {
      this.showYesButton = true;
      this.button1Text = "Yes";
      this.button1Response = PopupButtonResponse.Yes;
      this.button2Text = "Cancel";
      this.button2Response = PopupButtonResponse.Cancel;
    } else {
      this.showYesButton = true;
      this.button1Text = "Yes";
      this.button1Response = PopupButtonResponse.Yes;
      this.button2Text = "No";
      this.button2Response = PopupButtonResponse.No;
    }
  }

  popupResponse(response: PopupButtonResponse) {
    this.response.next(response);
  }
}
