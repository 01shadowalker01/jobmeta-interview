import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "src/app/core";
import { HttpResponse, RequestOutput } from "src/app/core/models";
import { Application, Category, Job } from "./models";

@Injectable({
  providedIn: "root",
})
export class JobApplicationService {
  constructor(private baseService: BaseService) {}

  getApplicationList(): RequestOutput<Application> {
    return this.baseService.get$<unknown, HttpResponse<Application>>({
      url: "application",
    });
  }

  addApplicant(applicant: Application) {
    return this.baseService.post$<Application, Application>({
      url: "application",
      body: applicant,
    });
  }

  getJobList(): RequestOutput<Job> {
    return this.baseService.get$<null, HttpResponse<Job>>({
      url: "job",
    });
  }

  getCategoryList(): Observable<Category[]> {
    return this.baseService.get$<null, Category[]>({
      url: "category",
    });
  }
}
