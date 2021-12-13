import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApplicationListComponent } from "./components/application-list/application-list.component";
import { NewApplicantComponent } from "./components/new-applicant/new-applicant.component";
import { NewJobComponent } from "./components/new-job/new-job.component";
import { JobApplicationRoutingModule } from "./job-appilication.routing";

@NgModule({
  declarations: [
    ApplicationListComponent,
    NewApplicantComponent,
    NewJobComponent,
  ],
  imports: [CommonModule, JobApplicationRoutingModule],
})
export class JobApplicationModule {}
