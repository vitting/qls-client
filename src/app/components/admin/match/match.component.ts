import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from "angularfire2/firestore";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { QlsActions } from "../../../../interfaces/actions";
import { ActivatedRoute } from "@angular/router";
import { QlsMatch } from "../../../../interfaces/match";
import { PopupButtonsType } from "../../popup/popup.enums";
import { PopupService } from "../../popup/popup.service";
import { QlsEvent } from "../../../../interfaces/event";
import { QlsCategory } from "../../../../interfaces/category";
import { DocumentReference, CollectionReference } from "@firebase/firestore-types";
import { UtilityService } from "../../../services/utility.service";

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
  private eventCollection: AngularFirestoreCollection<QlsEvent>;

  constructor(
    private route: ActivatedRoute, 
    private _fb: FormBuilder, 
    private afs: AngularFirestore, 
    private utilityService: UtilityService,
    private popupService: PopupService) {}

    ngOnInit() {
      this.setUserId();
      this.initForms();
      this.initEventCollection();
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
        this.initCurrentData();
      }
    }

    currentDataSelected(id) {
      if (id && id !== "0") {
        this.selectedDataId = id;
        
        this.eventCollection.doc(this.selectedEventId).collection<QlsMatch>(this.collectionName).doc(id).valueChanges().subscribe((doc: QlsMatch) => {
          if (doc) {
            this.dataForm.setValue({
              category: doc.categoryId,
              name: doc.name,
              description: doc.description,
              starttime: this.utilityService.getTimeFromDate(doc.start),
              startdate: this.utilityService.getDateFromDate(doc.start),
              endtime: this.utilityService.getTimeFromDate(doc.end),
              enddate: this.utilityService.getDateFromDate(doc.end),
              useLiveComments: doc.useLiveComments
            });
  
            this.showForm = true;
          }
        });
      } else {
        this.showForm = false;
      }
    }
  
    private initEventCollection() {
      this.eventCollection = this.afs.collection<QlsEvent>("events", (ref) => {
        return ref.where("users." + this.userId, "==", true);
      });
    }

    private setDefaultSelection() {
      this.currentDataForm.setValue({
        currentData: 0
      });
    }
  
    private initCurrentEvent() {
      this.currentEvents = this.eventCollection.valueChanges();
    }

    private initCurrentData() {
      this.currentData = this.eventCollection
      .doc(this.selectedEventId)
      .collection<QlsMatch>(this.collectionName, ref => ref.orderBy("name", "asc"))
      .valueChanges();

      this.setDefaultSelection();
    }
  
    private initCurrentCategories() {
      this.currentCategories = this.afs.collection<QlsCategory>("categories").valueChanges().take(1);
    }

    private initForms() {
      const currentDate = this.utilityService.getDateFromDate(new Date(Date.now()));
  
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
        start: this.utilityService.createDateString(this.dataForm.value.startdate, this.dataForm.value.starttime),
        end: this.utilityService.createDateString(this.dataForm.value.enddate, this.dataForm.value.endtime),
        useLiveComments: this.dataForm.value.useLiveComments,
        enabled: true
      };
      
      this.eventCollection.doc(this.selectedEventId).collection<QlsMatch>(this.collectionName).doc(id).set(match).then(() => {
        this.message("Match is added");
        this.afterSubmit();
      }).catch((e) => {
        console.log(e);
      }); 
    }
  
    private submitUpdate() {
      const match = {
        categoryId: this.dataForm.value.category,
        name: this.dataForm.value.name,
        description: this.dataForm.value.description,
        start: this.utilityService.createDateString(this.dataForm.value.startdate, this.dataForm.value.starttime),
        end: this.utilityService.createDateString(this.dataForm.value.enddate, this.dataForm.value.endtime),
        useLiveComments: this.dataForm.value.useLiveComments,
        enabled: true
      };
  
      this.eventCollection.doc(this.selectedEventId).collection<QlsMatch>(this.collectionName).doc(this.selectedDataId).update(match).then(() => {
        this.message("Match is updated");
        this.afterSubmit();
      }).catch((e) => {
        console.log(e);
      });
    }
    
    private submitDelete() {
      this.eventCollection.doc(this.selectedEventId).collection<QlsMatch>(this.collectionName).doc(this.selectedDataId).delete().then(() => {
        this.message("Match is deleted");
        this.afterSubmit();
      }).catch((e) => {
        console.log(e);
      });
    }
}
