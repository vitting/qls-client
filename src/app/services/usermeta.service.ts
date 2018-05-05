import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { UserMeta, UserMetaMatch, UserMetaEvent } from "../../interfaces/usermeta";

@Injectable()
export class UserMetaService {

    constructor(private afs: AngularFirestore) { }

    setUser(userId: string) {
        return this.afs.collection<UserMeta>("usermetas").doc(userId).set({
            id: userId
        }, { merge: true});
    }

    setEvent(userId: string, eventId: string, eventName: string) {
        return this.afs
        .collection<UserMeta>("usermetas").doc(userId)
        .collection<UserMetaEvent>("events").doc(eventId).set({
            eventId: eventId,
            name: eventName,
            date: new Date(Date.now())
        }, {merge: true});
    }

    setMatch(userId: string, eventId: string, matchId: string, matchName: string) {
        return this.afs
        .collection<UserMeta>("usermetas").doc(userId)
        .collection<UserMetaMatch>("matches").doc(matchId).set({
            eventId: eventId,
            matchId: matchId,
            name: matchName,
            date: new Date(Date.now())
        }, {merge: true});
    }

    deleteEvent(userId: string, eventId: string) {
        return this.afs
        .collection<UserMeta>("usermetas").doc(userId)
        .collection<UserMetaEvent>("events").doc(eventId).delete();
    }

    deleteMatch(userId: string, eventId: string, matchId: string) {
        return this.afs
        .collection<UserMeta>("usermetas")
        .doc(userId).collection<UserMetaEvent>("events").doc(eventId)
        .collection<UserMetaMatch>("matches").doc(matchId).delete();
    }
}
