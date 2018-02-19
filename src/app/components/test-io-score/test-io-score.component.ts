import { Component, OnInit } from "@angular/core";
import * as socketIo from "socket.io-client";
import Socket = SocketIOClient.Socket;

@Component({
  selector: "app-test-io-score",
  templateUrl: "./test-io-score.component.html",
  styleUrls: ["./test-io-score.component.scss"]
})
export class TestIoScoreComponent implements OnInit {
  public data = {
    title: "Silkeborg Beachvolley Cup - Semifinale",
    currentSet: 2,
    setResultTeamA: 1,
    setResultTeamB: 0,
    nameTeamA: "Laura og Camilla",
    nameTeamB: "Trine og Daniella",
    currentPointsTeamA: 10,
    currentPointsTeamB: 9,
    currentTimeoutTeamA: 1,
    currentTimeoutTeamB: 0
  };

  public timeoutMax = 2;
  public isControlsHidden = true;
  public isStartButtonHidden = false;

  private chatSocket: Socket = null;
  
  constructor() { }

  ngOnInit() {
    
  }

  startMatch() {
    console.log("Match started");
    this.isControlsHidden = false;
    this.isStartButtonHidden = true;
  }

  points(team: string, action: string) {
    console.log("Points Team " + team + " " + action);
  }

  timeouts(team: string, action: string) {
    console.log("Timeouts Team " + team + " " + action);
  }

  winner(team: string, action: string) {
    console.log("Winner Team " + team + " " + action);
  }
}
