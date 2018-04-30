import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { take } from "rxjs/operators";
import { QlsActions } from "../../../../interfaces/actions";
import { ActivatedRoute } from "@angular/router";
import { QlsMatch } from "../../../../interfaces/match";
import { PopupButtonsType } from "../../popup/popup.enums";
import { PopupService } from "../../popup/popup.service";
import { QlsEvent } from "../../../../interfaces/event";
import { QlsCategory } from "../../../../interfaces/category";
import { DocumentReference } from "@firebase/firestore-types";

@Component({
  selector: "qls-admin-match",
  templateUrl: "./match.component.html",
  styleUrls: ["./match.component.scss"]
})
export class MatchComponent implements OnInit {
  private userId: string;
  private collectionName = "matches";
  currentAction: QlsActions = QlsActions.none;
  currentData: Observable<QlsMatch[]>;
  currentEvents: Observable<QlsEvent[]>;
  currentCategories: Observable<QlsCategory[]>;
  submitBtnText = "Save";
  currentDataForm: FormGroup;
  currentEventForm: FormGroup;
  dataForm: FormGroup;
  showData = false;
  showForm = false;
  showEvents = true;
  showMatchContainer = false;
  showCurrentData = false;
  selectedDataId = "";
  selectedEventId = "";
  private eventCollection: DocumentReference;

  constructor(
    private route: ActivatedRoute, 
    private _fb: FormBuilder, 
    private afs: AngularFirestore, 
    private popupService: PopupService) {}

    ngOnInit() {
      this.setUserId();
      this.initForms();
      this.initCurrentEvent();
      this.initCurrentCategories();
    }

    submit() {
      if (this.dataForm.valid) {
        if (this.currentAction === QlsActions.add) {
          this.submitAdd();
        } else if (this.currentAction === QlsActions.edit) {
          this.submitUpdate();
        }
      }  
  
      if (this.dataForm.disabled && this.currentAction === QlsActions.remove) {
        this.submitDelete();
      }
    }
  
    action(action: string) {
      switch (action) {
        case QlsActions.add:
          this.showCurrentData = false;      
          this.showForm = true;
          this.submitBtnText = "Save";
          this.dataForm.enable();
          this.currentAction = QlsActions.add;
          break;
        case QlsActions.edit:
          this.showCurrentData = true;     
          this.showForm = false;
          this.submitBtnText = "Save";
          this.dataForm.enable();
          this.currentAction = QlsActions.edit;
          break;
        case QlsActions.remove:
          this.showCurrentData = true;      
          this.showForm = false;
          this.submitBtnText = "Delete";
          this.dataForm.disable();
          this.currentAction = QlsActions.remove;
          break;
        default:
          this.currentAction = QlsActions.none;
          break;
      }
  
      this.showData = true;
    }
  
    currentEventSelected(id) {
      if (id && id !== "0") {
        this.selectedEventId = id;
        this.showEvents = false;
        this.showMatchContainer = true;
        this.eventCollection = this.afs.collection<QlsEvent>("events").doc(this.selectedEventId).ref;
        this.initCurrentData();
      }
    }

    currentDataSelected(id) {
      if (id && id !== "0") {
        this.selectedDataId = id;
        
        this.afs.collection<QlsEvent>("events").doc(this.selectedEventId).collection<QlsMatch>(this.collectionName).doc(id).valueChanges().subscribe((doc: QlsMatch) => {
          if (doc) {
            this.dataForm.setValue({
              category: doc.categoryId,
              name: doc.name,
              description: doc.description,
              starttime: this.getTimeFromDate(doc.start),
              startdate: this.getDateFromDate(doc.start),
              endtime: this.getTimeFromDate(doc.end),
              enddate: this.getDateFromDate(doc.end),
              useLiveComments: doc.useLiveComments
            });
  
            this.showForm = true;
          }
        });
      } else {
        this.showForm = false;
      }
    }
  
    private setDefaultSelection() {
      this.currentDataForm.setValue({
        currentData: 0
      });
    }
  
    private initCurrentEvent() {
      this.currentEvents = this.afs.collection<QlsEvent>("events", (ref) => {
        return ref.where("users." + this.userId, "==", true);
      }).valueChanges();
    }

    private initCurrentData() {
      this.currentData = this.afs
      .collection<QlsEvent>("events")
      .doc(this.selectedEventId)
      .collection<QlsMatch>(this.collectionName, ref => ref.orderBy("name", "asc"))
      .valueChanges();
  
      this.setDefaultSelection();
    }
  
    private initCurrentCategories() {
      this.currentCategories = this.afs.collection<QlsCategory>("categories").valueChanges().take(1);
    }

    private initForms() {
      const currentDate = this.getDateFromDate(new Date(Date.now()));
  
      this.currentDataForm = this._fb.group({
        "currentData": ""
      });

      this.dataForm = this._fb.group({
        "category": "",
        "name": "",
        "description": "",
        "starttime": "08:00",
        "startdate": currentDate,
        "endtime": "18:00",
        "enddate": currentDate,
        "useLiveComments": false
      });
    }
  
    private setUserId() {
      this.userId = this.route.snapshot.paramMap.get("id");
    }
  
    private message(message) {
      this.popupService.popupMessage(true, {
        header: "Match",
        body: message,
        buttons: PopupButtonsType.NoButtons
      });
    }
  
    private afterSubmit() {
      this.showData = false;
      this.dataForm.reset();
      this.setDefaultSelection();
    }
  
    private submitAdd() {
      const id = this.afs.createId();
  
      const match: QlsMatch = {
        id: id,
        categoryId: this.dataForm.value.category,
        name: this.dataForm.value.name,
        description: this.dataForm.value.description,
        start: this.createDateString(this.dataForm.value.startdate, this.dataForm.value.starttime),
        end: this.createDateString(this.dataForm.value.enddate, this.dataForm.value.endtime),
        useLiveComments: this.dataForm.value.useLiveComments,
        enabled: true
      };
      
      this.afs.collection<QlsEvent>("events").doc(this.selectedEventId).collection<QlsMatch>(this.collectionName).doc(id).set(match).then(() => {
        this.message("Match is added");
        this.afterSubmit();
      }).catch((e) => {
        console.log(e);
      }); 
    }
  
    private submitUpdate() {
      const match = {
        name: this.dataForm.value.name,
        description: this.dataForm.value.description,
        start: this.createDateString(this.dataForm.value.startdate, this.dataForm.value.starttime),
        end: this.createDateString(this.dataForm.value.enddate, this.dataForm.value.endtime),
        useLiveComments: this.dataForm.value.useLiveComments,
        enabled: true
      };
  
      this.afs.collection<QlsEvent>("events").doc(this.selectedEventId).collection<QlsMatch>(this.collectionName).doc(this.selectedDataId).update(match).then(() => {
        this.message("Match is updated");
        this.afterSubmit();
      }).catch((e) => {
        console.log(e);
      });
    }
    
    private submitDelete() {
      this.afs.collection<QlsEvent>("events").doc(this.selectedEventId).collection<QlsMatch>(this.collectionName).doc(this.selectedDataId).delete().then(() => {
        this.message("Match is deleted");
        this.afterSubmit();
      }).catch((e) => {
        console.log(e);
      });
    }
  
    private createDateString(dateString: string, timeString: string) {
      return new Date(`${dateString}T${timeString}Z`);
    }
  
    private getTimeFromDate(date: Date) {
      let hours = date.getUTCHours().toString();
      let minutes = date.getUTCMinutes().toString();
      
      if (date.getUTCHours() < 10) {
        hours = `0${hours}`;
      }
  
      if (date.getUTCMinutes() < 10) {
        minutes = `0${minutes}`;
      }
  
      return `${hours}:${minutes}`;
    }
  
    private getDateFromDate(date: Date) {
      return date.toJSON().slice(0, 10);
    }
}
