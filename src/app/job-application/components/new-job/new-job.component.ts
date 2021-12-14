import { Component, OnInit } from "@angular/core";

@Component({
  selector: "hbm-new-job",
  templateUrl: "./new-job.component.html",
  styleUrls: ["./new-job.component.scss", "../../shared/shared-styles.scss"],
})
export class NewJobComponent implements OnInit {
  foods = [];
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
