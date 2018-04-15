import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class CanActiveAuthUser implements CanActivate {

    constructor(private router: Router, private afAuth: AngularFireAuth) {
    }

    canActivate() {
        if (this.afAuth.auth.currentUser) {
            return true;
        } else {
            this.router.navigate(["/login"]);
            return false;
        }
    }
}
