import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { QlsEvent } from "../../../../interfaces/event";

@Component({
  selector: "qls-admin-addevent",
  templateUrl: "./add_event.component.html",
  styleUrls: ["./add_event.component.scss"]
})
export class AddEventComponent implements OnInit {
  private eventsCollection: AngularFirestoreCollection<QlsEvent>;
  events: Observable<DocumentChangeAction[]>;
  currentEvent = 5;
  model = {
    "name": "",
    "description": "",
    "starttime": "18:00",
    "startdate": "",
    "endtime": "18:00",
    "enddate": ""
  };
  currentEventForm: FormGroup;
  addeventForm: FormGroup;
  showData = false;
  showCurrentEvents = false;

  constructor(private _fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    this.currentEventForm = this._fb.group({
      "currentEvent": ""
    });

    this.addeventForm = this._fb.group({
      "name": ["", Validators.required],
      "description": "",
      "starttime": "",
      "startdate": "",
      "endtime": "",
      "enddate": ""
    });

    // this.eventsCollection = this.afs.collection<QlsEvent>("events");
    // this.events = this.eventsCollection.snapshotChanges();
    // this.events.subscribe((events: DocumentChangeAction[]) => {
    //   events.forEach((d) => {
    //     console.dir(d.payload.doc.data());
    //   });
      
    // });
  }

  submit() {
    const id = this.afs.createId();

    const a: QlsEvent = {
      id: id,
      name: "test",
      description: "noget om noget",
      start: new Date(Date.now()),
      end: new Date(Date.now()),
      enabled: true
    }
    
    this.afs.collection<QlsEvent>("events").doc(id).set(a);
    
  }

  action(action: string) {
    switch (action) {
      case "add":
        this.showCurrentEvents = false;      
        this.showData = true;
        break;
      case "edit":
        // this.showCurrentEvents = true;     
        this.test(); 
        break;
      case "remove":
        this.showCurrentEvents = true;      
        break;
      default:
        break;
    }
  }

  test() {
    this.eventsCollection = this.afs.collection<QlsEvent>("events", (ref) => {
      
      return ref.where("id", "==", "Erz0vKFgmN6zSwJMaMgj");
    });
    this.events = this.eventsCollection.snapshotChanges();
    this.events.subscribe((events: DocumentChangeAction[]) => {
      events.forEach((d) => {
        console.dir(d.payload.doc.data());
      });
      
    });
  }

}
