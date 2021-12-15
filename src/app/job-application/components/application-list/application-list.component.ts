import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RequestOutput } from "src/app/core/models";
import { JobApplicationService } from "../../shared/job-application.service";
import { Application } from "../../shared/models";

@Component({
  selector: "hbm-application-list",
  templateUrl: "./application-list.component.html",
  styleUrls: [
    "../../shared/shared-styles.scss",
    "./application-list.component.scss",
  ],
})
export class ApplicationListComponent implements OnInit {
  applicationList$!: RequestOutput<Application>;
  columns = ["name", "phone", "job", "status"];
  foods = [];

  constructor(private jobApplicationSrvc: JobApplicationService) {}

  ngOnInit(): void {
    this.getApplicationList();
  }

  getApplicationList() {
    this.applicationList$ = this.jobApplicationSrvc.getApplicationList();
  }
}
