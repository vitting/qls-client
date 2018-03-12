import { Component, OnInit } from "@angular/core";
import * as socketIo from "socket.io-client";
import Socket = SocketIOClient.Socket;
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "qls-admin-addevent",
  templateUrl: "./add_event.component.html",
  styleUrls: ["./add_event.component.scss"]
})
export class AddEventComponent implements OnInit {
  model: NgbDateStruct;
  
  constructor() { }

  ngOnInit() {
    
  }
}
