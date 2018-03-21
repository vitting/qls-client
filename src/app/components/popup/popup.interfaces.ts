import { PopupButtonsType } from "./popup.enums";

export interface PopupSettings {
    header?: string;
    body: string;
    buttons?: PopupButtonsType;
}
