import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "hbm-new-applicant",
  templateUrl: "./new-applicant.component.html",
  styleUrls: [
    "./new-applicant.component.scss",
    "../../shared/shared-styles.scss",
  ],
})
export class NewApplicantComponent implements OnInit {
  form = new FormGroup({});
  foods = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initFormConfig();
  }

  initFormConfig() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, Validators.required],
      status: [null, Validators.required],
      job_id: [null, Validators.required],
      resume: [null, Validators.required],
    });
  }

  onSubmit() {}
}
