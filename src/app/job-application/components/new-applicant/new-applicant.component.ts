import { Component, OnInit } from "@angular/core";

@Component({
  selector: "hbm-new-applicant",
  templateUrl: "./new-applicant.component.html",
  styleUrls: [
    "./new-applicant.component.scss",
    "../../shared/shared-styles.scss",
  ],
})
export class NewApplicantComponent implements OnInit {
  foods = [];
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
