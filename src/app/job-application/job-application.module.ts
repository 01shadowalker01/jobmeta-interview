import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { ApplicationListComponent } from "./components/application-list/application-list.component";
import { NewApplicantComponent } from "./components/new-applicant/new-applicant.component";
import { NewJobComponent } from "./components/new-job/new-job.component";
import { JobApplicationRoutingModule } from "./job-appilication.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared";

@NgModule({
  declarations: [
    ApplicationListComponent,
    NewApplicantComponent,
    NewJobComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,

    JobApplicationRoutingModule,
    SharedModule,
  ],
})
export class JobApplicationModule {}
