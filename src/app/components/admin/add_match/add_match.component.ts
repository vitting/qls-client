import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "qls-admin-addevent",
  templateUrl: "./add_match.component.html",
  styleUrls: ["./add_match.component.scss"]
})
export class AddMatchComponent implements OnInit {
  currentMatch = "";
  model = {
    "category": "",
    "name": "",
    "description": "",
    "starttime": "",
    "startdate": "",
    "endtime": "",
    "enddate": "",
    "useLiveComments": false
  };

  currentMatchForm: FormGroup;
  addMatchForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.currentMatchForm = this._fb.group({
      "currentMatch": ""
    });

    this.addMatchForm = this._fb.group({
      "category": "",
      "name": "",
      "description": "",
      "starttime": "",
      "startdate": "",
      "endtime": "",
      "enddate": "",
      "useLiveComments": false
    });
  }

  submit() {

  }
}
