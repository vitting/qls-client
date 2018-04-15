import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "qls-admin-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }

  logout() {
    this.userService.signOutUser();
  }
}
