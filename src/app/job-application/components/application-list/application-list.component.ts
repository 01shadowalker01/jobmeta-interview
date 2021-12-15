import { Component, OnInit } from "@angular/core";

@Component({
  selector: "hbm-application-list",
  templateUrl: "./application-list.component.html",
  styleUrls: [
    "../../shared/shared-styles.scss",
    "./application-list.component.scss",
  ],
})
export class ApplicationListComponent implements OnInit {
  applicationList = [
    {
      name: "moz",
      phone: 12345678,
      job: "Quality Assurance Officer#6",
      status: "pending_review",
    },
    {
      name: "moz",
      phone: 12345678,
      job: "Quality Assurance Officer#6",
      status: "pending_review",
    },
    {
      name: "moz",
      phone: 12345678,
      job: "Quality Assurance Officer#6",
      status: "pending_review",
    },
    {
      name: "moz",
      phone: 12345678,
      job: "Quality Assurance Officer#6",
      status: "pending_review",
    },
    {
      name: "moz",
      phone: 12345678,
      job: "Quality Assurance Officer#6",
      status: "pending_review",
    },
  ];
  columns = ["name", "phone", "job", "status"];
  foods = [];

  constructor() {}

  ngOnInit(): void {}
}
