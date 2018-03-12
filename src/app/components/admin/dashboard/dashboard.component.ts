import { Component, OnInit } from "@angular/core";
import * as socketIo from "socket.io-client";
import Socket = SocketIOClient.Socket;
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "qls-admin-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  model: NgbDateStruct;
  
  constructor() { }

  ngOnInit() {
    
  }
}
