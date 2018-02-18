import { Component, OnInit } from "@angular/core";
import * as socketIo from "socket.io-client";
import Socket = SocketIOClient.Socket;

@Component({
  selector: "app-test-io-admin",
  templateUrl: "./test-io-admin.component.html",
  styleUrls: ["./test-io-admin.component.scss"]
})
export class TestIoAdminComponent implements OnInit {
  public title = "Silkeborg Beachvolley Cup - Semifinale";
  public currentSet = 2;
  public setResultTeamA = 1;
  public setResultTeamB = 0;
  public nameTeamA = "Laura og Camilla";
  public nameTeamB = "Trine og Daniella";
  public currentPointsTeamA = 10;
  public currentPointsTeamB = 9;
  public currentTimeoutTeamA = 1;
  public currentTimeoutTeamB = 0;
  public timeoutMax = 2;

  private chatSocket: Socket = null;
  
  constructor() { }

  ngOnInit() {
    // this.chatSocket = socketIo("http://localhost:3000");

    // this.chatSocket.on("connect", () => {
    //   console.log("CONNECTED");

    //   this.chatSocket.on("message_client", (msg) => {
    //     console.log(msg);
    //   });
  
    //   this.chatSocket.emit("message_server", "HULLLUU", (data) => {
    //     console.log(data);
    //   });
    // });

    
  }
}
