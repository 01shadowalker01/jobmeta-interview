import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "hbm-application-list",
  templateUrl: "./application-list.component.html",
  styleUrls: [
    "./application-list.component.scss",
    "../../shared/shared-styles.scss",
  ],
})
export class ApplicationListComponent implements OnInit {
  applicationList = new MatTableDataSource();
  columns = ["name", "phone", "job", "status"];
  foods = [];

  constructor() {}

  ngOnInit(): void {}
}
