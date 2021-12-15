import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { JobApplicationService } from "../../shared/job-application.service";
import { Category } from "../../shared/models";

@Component({
  selector: "hbm-new-job",
  templateUrl: "./new-job.component.html",
  styleUrls: ["./new-job.component.scss", "../../shared/shared-styles.scss"],
})
export class NewJobComponent implements OnInit {
  categoryList$!: Observable<Category[]>;
  form = new FormGroup({});
  foods = [];

  constructor(
    private formBuilder: FormBuilder,
    private jobApplicationSrvc: JobApplicationService,
  ) {}

  ngOnInit(): void {
    this.initFormConfig();
    this.getCategoryList();
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

  getCategoryList() {
    this.categoryList$ = this.jobApplicationSrvc.getCategoryList();
  }

  onSubmit() {}
}
