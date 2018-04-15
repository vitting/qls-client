import { Injectable } from "@angular/core";
import { QlsUserStatus } from "../../interfaces/userStatus";

@Injectable()
export class ErrorService {

    constructor() { }

    getError(errorCode) {
        let error: QlsUserStatus = QlsUserStatus.Error;

        switch(errorCode) {
            case "auth/weak-password":
                error = QlsUserStatus.Weakpassword;
                break;
            case "auth/email-already-in-use": 
                error = QlsUserStatus.EmailInUse;
                break;
            case "auth/invalid-email":
                error = QlsUserStatus.InvalidEmail;
                break;
            case "auth/operation-not-allowed":
                error = QlsUserStatus.OperationNotAllowed;
                break;
            case "auth/user-disabled":
                error = QlsUserStatus.UserDisabled;
                break;
            case "auth/user-not-found":
                error = QlsUserStatus.UserNotFound;
                break;
            case "auth/wrong-password":
                error = QlsUserStatus.WrongPassword;
                break;
        }

        return error;
    }
}
