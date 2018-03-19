import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "qls-admin-addevent",
  templateUrl: "./add_event.component.html",
  styleUrls: ["./add_event.component.scss"]
})
export class AddEventComponent implements OnInit {
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
  
  constructor(private _fb: FormBuilder) { }

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
  }

  submit() {
    
  }
}
