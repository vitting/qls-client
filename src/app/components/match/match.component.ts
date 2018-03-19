import { Component, OnInit } from "@angular/core";
import * as socketIo from "socket.io-client";
import Socket = SocketIOClient.Socket;

@Component({
  selector: "qls-match",
  templateUrl: "./match.component.html",
  styleUrls: ["./match.component.scss"]
})
export class MatchComponent implements OnInit {
  title = "Silkeborg Beachvolley Cup - Semifinale";
  currentSet = 2;
  setResultTeamA = 1;
  setResultTeamB = 0;
  nameTeamA = "Laura og Camilla";
  nameTeamB = "Trine og Daniella";
  currentPointsTeamA = 10;
  currentPointsTeamB = 9;
  currentTimeoutTeamA = 1;
  currentTimeoutTeamB = 0;
  timeoutMax = 2;

  teamAActive = false;
  teamBActive = false;

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

  setActiveTeam(activeTeam: string = "none") {
    if (activeTeam === "a") {
      this.teamAActive = true;  
      this.teamBActive = false;
    } else if (activeTeam === "b") {
      this.teamAActive = false;  
      this.teamBActive = true;
    } else {
      this.teamAActive = false;  
      this.teamBActive = false;
    }
  }

  toogleActiveTeam() {
    if (!this.teamAActive) {
      this.teamAActive = true;  
      this.teamBActive = false;
    } else {
      this.teamAActive = false;  
      this.teamBActive = true;
    }
  }

}
