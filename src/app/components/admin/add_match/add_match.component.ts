import { Component, OnInit } from "@angular/core";
import * as socketIo from "socket.io-client";
import Socket = SocketIOClient.Socket;
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "qls-admin-addevent",
  templateUrl: "./add_match.component.html",
  styleUrls: ["./add_match.component.scss"]
})
export class AddMatchComponent implements OnInit {
  public startHH = "00";
  constructor() { }

  ngOnInit() {
    
  }

  formatDate(date: any) {
    if (parseInt(date.value, 10) < 10) {
      date.value = "0" + date.value;
    }
  }
}
