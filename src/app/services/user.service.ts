import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {

    constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { }

    createUser(email: string, password: string) {
        this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password).then((data) => {
            console.log("OK", data);
        }).catch((error) => {
            console.log("Error", error);
        })
    }

    signinUser(email: string, password: string) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
}
