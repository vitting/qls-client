import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { QlsUser } from "../../interfaces/user";
import { ErrorService } from "./error.service";
import { QlsUserStatus } from "../../interfaces/userStatus";
import "rxjs/add/operator/take";

@Injectable()
export class UserService {
    constructor(
        private afAuth: AngularFireAuth, 
        private afs: AngularFirestore, 
        private errorService: ErrorService) { }
    
    createUser({name, email, mobile, password}) {
        return new Promise<QlsUserStatus>((resolve, reject) => {
            this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password).then((data) => {
                this.afs.collection<QlsUser>("users").doc(data.user.uid).set({
                    id: data.user.uid,
                    name: name,
                    mobile: mobile
                }).then((d) => {
                    resolve(QlsUserStatus.Ok);
                }).catch((e) => {
                    reject(QlsUserStatus.UserNotCreated);
                });
            }).catch((error) => {
                reject(this.errorService.getError(error.code));
            });
        });
    }

    signInUser(email: string, password: string) {
        return this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password).then((d) => {
            return QlsUserStatus.LoggedIn;
        }).catch((error) => {
            return this.errorService.getError(error.code);
        });
    }

    signOutUser() {
        this.afAuth.auth.signOut().then((d) => {
            console.log("signout", d);
        }).catch((e) => {
            console.log("error signout", e);
        });
    }

    userStat(): Observable<string> {
        return this.afAuth.authState.map((user) => {
            if (user) {
                return user.uid;
            }

            return null; 
        });
    }

    getUser(id: string) {
        if (id) {
            return this.afs.collection<QlsUser>("users").doc(id).valueChanges();
        }
    }

    isUserAuthenticated(): boolean {
        return this.afAuth.auth.currentUser ? true : false;
    }
}
