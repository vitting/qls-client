import { Component, OnInit } from "@angular/core";
import * as socketIo from "socket.io-client";
import Socket = SocketIOClient.Socket;

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
