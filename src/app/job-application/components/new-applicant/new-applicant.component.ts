import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { JobApplicationService } from "../../shared/job-application.service";
import { Job } from "../../shared/models";

@Component({
  selector: "hbm-new-applicant",
  templateUrl: "./new-applicant.component.html",
  styleUrls: [
    "./new-applicant.component.scss",
    "../../shared/shared-styles.scss",
  ],
})
export class NewApplicantComponent implements OnInit {
  jobList$!: Observable<Job[]>;
  form = new FormGroup({});
  statusList = ["pending_review"];

  constructor(
    private formBuilder: FormBuilder,
    private jobApplicationSrvc: JobApplicationService,
  ) {}

  ngOnInit(): void {
    this.initFormConfig();
    this.getJobList();
  }

  initFormConfig() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, Validators.required],
      status: [null, Validators.required],
      job_id: [null, Validators.required],
      resume: [null],
    });
  }

  getJobList() {
    this.jobList$ = this.jobApplicationSrvc
      .getJobList()
      .pipe(map(resp => resp.items));
  }

  onSubmit() {
    // if (this.form.valid) {
      this.jobApplicationSrvc
        .addApplicant(this.form.value)
        .subscribe(console.log);
    }
  // }
}
