import { Injectable } from "@angular/core";
import { BaseService } from "src/app/core";
import { HttpResponse, RequestOutput } from "src/app/core/models";
import { Application } from "./models";

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
}
