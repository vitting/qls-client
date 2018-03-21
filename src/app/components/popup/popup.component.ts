import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PopupButtonsType, PopupButtonResponse } from "./popup.enums";
import { PopupService } from "./popup.service";
import { PopupSettings } from "./popup.interfaces";

@Component({
  selector: "qls-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"]
})
export class PopupComponent implements OnInit {
  @Input() show = false;
  @Input() header = "";
  @Input() body = "";
  @Input() buttons = PopupButtonsType.YesNo;
  @Output() response = new EventEmitter<PopupButtonResponse>();
  showYesButton = true;
  button1Text = "";
  button2Text = "";
  button1Response: PopupButtonResponse;
  button2Response: PopupButtonResponse;

  constructor(private popupService: PopupService) { }

  ngOnInit() {
    this.initPopup(this.buttons);
    
    this.popupService.setPopup$.subscribe((settings: PopupSettings) => {
      if (settings.header) {
        this.header = settings.header;
      }
      
      this.body = settings.body;

      if (settings.buttons) {
        this.buttons = settings.buttons;
        this.initPopup(this.buttons);
      }
    });

    this.popupService.showPopup$.subscribe((show: boolean) => {
      this.show = show;
    });
  }

  private initPopup(buttons: PopupButtonsType) {
    if (buttons === PopupButtonsType.Ok) {
      this.showYesButton = false;
      this.button2Text = "Ok";
      this.button2Response = PopupButtonResponse.Ok;      
    } else if (buttons === PopupButtonsType.OkCancel) {
      this.showYesButton = true;
      this.button1Text = "Ok";
      this.button2Text = "Cancel";
      this.button1Response = PopupButtonResponse.Ok;      
      this.button2Response = PopupButtonResponse.Cancel;
    } else if (buttons === PopupButtonsType.YesCancel) {
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
    this.popupService.popupResponseMessage(response);
  }
}
