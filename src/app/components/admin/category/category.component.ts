import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { QlsEvent } from "../../../../interfaces/event";
import { QlsActions } from "../../../../interfaces/actions";
import { ActivatedRoute } from "@angular/router";
import { QlsCategory } from "../../../../interfaces/category";
import { QlsBeachvolleyModel, QlsBeachvolleyModelUpdateReason } from "../../../../interfaces/beachvolleyModel";
import { QlsMatch } from "../../../../interfaces/match";
import { PopupService } from "../../popup/popup.service";
import { PopupButtonsType } from "../../popup/popup.enums";

@Component({
  selector: "qls-admin-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  private userId: string;
  currentAction: QlsActions = QlsActions.none;
  currentData: Observable<QlsCategory[]>;
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
    private afs: AngularFirestore, private popupService: PopupService) {}

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
      this.afs.collection<QlsCategory>("categories").doc(id).valueChanges().subscribe((doc: QlsCategory) => {
        if (doc) {
          this.addDataForm.setValue({
            name: doc.name,
            modelId: doc.modelId
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
      currentCategory: 0
    });
  }

  private initCurrentData() {
    this.currentData = this.afs
    .collection<QlsCategory>("categories", ref => ref.orderBy("name", "asc"))
    .valueChanges();

    this.setDefaultSelection();
  }

  private initForms() {
    this.currentDataForm = this._fb.group({
      "currentCategory": ""
    });

    this.addDataForm = this._fb.group({
      "name": ["", Validators.required],
      "modelId": ""
    });
  }

  private setUserId() {
    this.userId = this.route.snapshot.paramMap.get("id");
  }

  private message(message) {
    this.popupService.popupMessage(true, {
      header: "Category",
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
    const category: QlsCategory =  {
      id: id,
      name: this.addDataForm.value.name,
      modelId: this.addDataForm.value.modelId
    };
    
    this.afs.collection<QlsCategory>("categories").doc(id).set(category).then(() => {
      this.message("Category is added");
      this.afterSubmit();
    }).catch((e) => {
      console.log(e);
    }); 
  }

  private submitUpdate() {
    this.afs.collection<QlsCategory>("categories").doc(this.selectedDataId).update(this.addDataForm.value).then(() => {
      this.message("Category is updated");
      this.afterSubmit();
    }).catch((e) => {
      console.log(e);
    });
  }

  private submitDelete() {
    this.afs.collection<QlsCategory>("categories").doc(this.selectedDataId).delete().then(() => {
      this.message("Category is deleted");
      this.afterSubmit();
    }).catch((e) => {
      console.log(e);
    });
  }
}
