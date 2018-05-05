import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { PopupSettings } from "./popup.interfaces";
import { PopupButtonResponse, PopupButtonsType } from "./popup.enums";

@Injectable()
export class PopupService {
    showPopup: Subject<boolean> = new Subject<boolean>();
    showPopup$ = this.showPopup.asObservable();
    setPopup: Subject<PopupSettings> = new Subject<PopupSettings>();
    setPopup$ = this.setPopup.asObservable();
    popupResponse: Subject<PopupButtonResponse> = new Subject<PopupButtonResponse>();
    popupResponse$ = this.popupResponse.asObservable();
    constructor() { }

    popupMessage(show: boolean, settings?: PopupSettings) {
        if (settings) {
            this.setPopup.next(settings);
        }
        
        this.showPopup.next(show);
    }

    popupResponseMessage(response: PopupButtonResponse) {
        this.popupResponse.next(response);
    }
}
