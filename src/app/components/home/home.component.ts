import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import { PopupService } from "../popup/popup.service";
import { PopupButtonsType, PopupButtonResponse } from "../popup/popup.enums";

const states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia",
  "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
  "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
  "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island",
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming"];

@Component({
  selector: "qls-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  searchForMatches = "";
  searchForMatchesForm: FormGroup;
  
  search = (text$: Observable<string>) => {
    return text$
    .debounceTime(200)
    .distinctUntilChanged()
    .map(term => term.length < 2 ? []
      : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
  }
  

  constructor(private _fb: FormBuilder, private popupService: PopupService) { }

  ngOnInit() {
    this.searchForMatchesForm = this._fb.group({
      "searchForMatches": ["", Validators.required]
    });

    this.popupService.popupResponse$.subscribe((response: PopupButtonResponse) => {
      console.log(response);
    });
  }

  submit() {
    
  }

  btn1() {
    this.popupService.popupMessage(true, {
      header: "Wow a header",
      body: "Now i have set at new body",
      buttons: PopupButtonsType.Ok
    });
  }

  btn2() {
    this.popupService.popupMessage(false);
  }
}
