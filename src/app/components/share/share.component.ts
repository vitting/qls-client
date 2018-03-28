import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UUID } from "angular2-uuid";

@Component({
  selector: "qls-share",
  templateUrl: "./share.component.html",
  styleUrls: ["./share.component.scss"]
})
export class ShareComponent implements OnInit {
  shareForm: FormGroup;
  shareEmail = "";
  shareLink = "";
  emails = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.shareForm = this._fb.group({
      "shareLink": ["", Validators.required]
    });
  }

  addEmail() {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.shareEmail && regex.test(this.shareEmail)) {
      this.emails.push({
        "id": UUID.UUID(),
        "email": this.shareEmail
      });

      this.shareEmail = "";
    }
  }

  removeEmail(e) {
    console.log(this.emails.indexOf(e));
    this.emails.splice(this.emails.indexOf(e), 1);
  }

  submit() {

  }
}
