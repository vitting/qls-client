import { Component, OnInit } from "@angular/core";

@Component({
  selector: "qls-admin-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  last5Events = [
    {
      id: "t65434-345-tg43-43ert34",
      name: "Silkeborg Beachvolley 2018 Event 1"
    },
    {
      id: "t65434-345-tg43-43ert35",
      name: "Silkeborg Beachvolley 2018 Event 2"
    },
    {
      id: "t65434-345-tg43-43ert36",
      name: "Silkeborg Beachvolley 2018 Event 3"
    },
    {
      id: "t65434-345-tg43-43ert37",
      name: "Silkeborg Beachvolley 2018 Event 4"
    },
    {
      id: "t65434-345-tg43-43ert38",
      name: "Silkeborg Beachvolley 2018 Event 5"
    }
  ];

  last5Matches = [
    {
      id: "er5645tr43-435t435-er3453",
      name: "18-02-2018 Finle Lene og trine mod allan og peter 1"
    },
    {
      id: "er5645tr43-435t435-er3454",
      name: "18-02-2018 Finle Lene og trine mod allan og peter 2"
    },
    {
      id: "er5645tr43-435t435-er3455",
      name: "18-02-2018 Finle Lene og trine mod allan og peter 3"
    },
    {
      id: "er5645tr43-435t435-er3456",
      name: "18-02-2018 Finle Lene og trine mod allan og peter 4"
    },
    {
      id: "er5645tr43-435t435-er3457",
      name: "18-02-2018 Finle Lene og trine mod allan og peter 5"
    }
  ];

  constructor() { }

  ngOnInit() {
    
  }

  shareLink(type: string, data: any) {
    console.log(type, data);
  }
}
