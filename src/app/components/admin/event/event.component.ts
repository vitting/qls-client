import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { QlsEvent } from "../../../../interfaces/event";
import { QlsActions } from "../../../../interfaces/actions";
import { ActivatedRoute } from "@angular/router";
import { QlsMatch } from "../../../../interfaces/match";
import { PopupButtonsType } from "../../popup/popup.enums";
import { PopupService } from "../../popup/popup.service";
import { UtilityService } from "../../../services/utility.service";

@Component({
  selector: "qls-admin-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnInit {
  private userId: string;
  currentAction: QlsActions = QlsActions.none;
  currentData: Observable<QlsEvent[]>;
  submitBtnText = "Save";
  currentDataForm: FormGroup;
  addDataForm: FormGroup;
  showData = false;
  showForm = false;
  showCurrentData = false;
  selectedDataId = "";

  constructor(
    private route: ActivatedRoute, 
    private _fb: FormBuilder, 
    private afs: AngularFirestore, 
    private utilityService: UtilityService,
    private popupService: PopupService) {}

  ngOnInit() {
    this.setUserId();
    this.initForms();
    this.initCurrentData();
  }

  submit() {
    if (this.addDataForm.valid) {
      if (this.currentAction === QlsActions.add) {
        this.submitAdd();
      } else if (this.currentAction === QlsActions.edit) {
        this.submitUpdate();
      }
    }  

    if (this.addDataForm.disabled && this.currentAction === QlsActions.remove) {
      this.submitDelete();
    }
  }

  action(action: string) {
    switch (action) {
      case QlsActions.add:
        this.showCurrentData = false;      
        this.showForm = true;
        this.submitBtnText = "Save";
        this.addDataForm.enable();
        this.currentAction = QlsActions.add;
        break;
      case QlsActions.edit:
        this.showCurrentData = true;     
        this.showForm = false;
        this.submitBtnText = "Save";
        this.addDataForm.enable();
        this.currentAction = QlsActions.edit;
        break;
      case QlsActions.remove:
        this.showCurrentData = true;      
        this.showForm = false;
        this.submitBtnText = "Delete";
        this.addDataForm.disable();
        this.currentAction = QlsActions.remove;
        break;
      default:
        this.currentAction = QlsActions.none;
        break;
    }

    this.showData = true;
  }

  currentDataSelected(id) {
    if (id && id !== "0") {
      this.selectedDataId = id;
      this.afs.collection<QlsEvent>("events").doc(id).valueChanges().subscribe((doc: QlsEvent) => {
        if (doc) {
          this.addDataForm.setValue({
            name: doc.name,
            description: doc.description,
            starttime: this.utilityService.getTimeFromDate(doc.start),
            startdate: this.utilityService.getDateFromDate(doc.start),
            endtime: this.utilityService.getTimeFromDate(doc.end),
            enddate: this.utilityService.getDateFromDate(doc.end)
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
      currentEvent: 0
    });
  }

  private initCurrentData() {
    this.currentData = this.afs
    .collection<QlsEvent>("events", ref => ref.orderBy("name", "asc"))
    .valueChanges();

    this.setDefaultSelection();
  }

  private initForms() {
    const currentDate = this.utilityService.getDateFromDate(new Date(Date.now()));

    this.currentDataForm = this._fb.group({
      "currentEvent": ""
    });

    this.addDataForm = this._fb.group({
      "name": ["", Validators.required],
      "description": "",
      "starttime": "08:00",
      "startdate": currentDate,
      "endtime": "18:00",
      "enddate": currentDate
    });
  }

  private setUserId() {
    this.userId = this.route.snapshot.paramMap.get("id");
  }

  private message(message) {
    this.popupService.popupMessage(true, {
      header: "Event",
      body: message,
      buttons: PopupButtonsType.NoButtons
    });
  }

  private afterSubmit() {
    this.showData = false;
    this.addDataForm.reset();
    this.setDefaultSelection();
  }

  private submitAdd() {
    const id = this.afs.createId();
    const user = {};
    user[this.userId] = true;
    const event: QlsEvent = {
      id: id,
      users: user,
      name: this.addDataForm.value.name,
      description: this.addDataForm.value.description,
      start: this.utilityService.createDateString(this.addDataForm.value.startdate, this.addDataForm.value.starttime),
      end: this.utilityService.createDateString(this.addDataForm.value.enddate, this.addDataForm.value.endtime),
      enabled: true
    };
    
    this.afs.collection<QlsEvent>("events").doc(id).set(event).then(() => {
      this.message("Event is added");
      this.afterSubmit();
    }).catch((e) => {
      console.log(e);
    }); 
  }

  private submitUpdate() {
    const event = {
      name: this.addDataForm.value.name,
      description: this.addDataForm.value.description,
      start: this.utilityService.createDateString(this.addDataForm.value.startdate, this.addDataForm.value.starttime),
      end: this.utilityService.createDateString(this.addDataForm.value.enddate, this.addDataForm.value.endtime),
      enabled: true
    };

    this.afs.collection<QlsEvent>("events").doc(this.selectedDataId).update(event).then(() => {
      this.message("Event is updated");
      this.afterSubmit();
    }).catch((e) => {
      console.log(e);
    });
  }
  
  private submitDelete() {
    this.afs.collection<QlsEvent>("events").doc(this.selectedDataId).delete().then(() => {
      this.message("Event is deleted");
      this.afterSubmit();
    }).catch((e) => {
      console.log(e);
    });
  }
}
