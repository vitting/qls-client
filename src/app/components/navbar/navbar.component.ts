import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { QlsUserStatus } from "../../../interfaces/userStatus";

@Component({
  selector: "qls-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  showUser = false;
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.userService.userStat().subscribe((userId) => {
      this.showUser = userId ? true : false; 

      if (userId) {
        this.userService.getUser(userId).subscribe((user) => {
          console.log(user);
        });
      }
    });
  }

  navbarCollapse() {
    const x = document.getElementById("qlsNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }


}
