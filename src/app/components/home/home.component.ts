import { Component, OnInit } from "@angular/core";
import * as socketIo from "socket.io-client";
import Socket = SocketIOClient.Socket;

@Component({
  selector: "qls-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }
}
