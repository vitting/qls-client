import { Component, OnInit } from "@angular/core";

@Component({
  selector: "qls-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }

  myFunction() {
    const x = document.getElementById("qlsNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

}
