import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";

@Injectable()
export class CanActiveAuthUser implements CanActivate {

    constructor(private router: Router, private afAuth: AngularFireAuth) {
    }

    // canActivate(): Observable<boolean> {
    //     return this.afAuth.authState
    //     .take(1)
    //     .map(authState => !!authState)
    //     .do(auth => !auth ? this.router.navigate(["/login"]) : true);
    // }

    canActivate() {
        // TODO: Don't use active. Use this.afAuth.authsate in app.component and redirect to login.
        return true;
        
        // if (this.afAuth.auth.currentUser) {
        //     return true;
        // } else {
        //     // this.router.navigate(["/login"]);
        //     return false;
        // }
    }
}
