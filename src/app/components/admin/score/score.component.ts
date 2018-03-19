import { Component, OnInit } from "@angular/core";

@Component({
  selector: "qls-admin-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.scss"]
})
export class ScoreComponent implements OnInit {
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
