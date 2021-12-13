import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApplicationListComponent } from "./components/application-list/application-list.component";
import { NewApplicantComponent } from "./components/new-applicant/new-applicant.component";
import { NewJobComponent } from "./components/new-job/new-job.component";

const routes: Routes = [
  { path: "application-list", component: ApplicationListComponent },
  { path: "new-applicant", component: NewApplicantComponent },
  { path: "new-job", component: NewJobComponent },

  { path: "**", pathMatch: "full", redirectTo: "application-list" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class JobApplicationRoutingModule {}
