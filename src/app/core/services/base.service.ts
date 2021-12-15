import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import {
  HttpResponse,
  HttpRequest,
  QueryParam,
  RequestConfig,
  RequestOutput,
} from "../models";
import { AlertService, AlertType } from "../modules/alert";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  constructor(private http: HttpClient, private alertService: AlertService) {}

  public get baseUrl(): string {
    return environment.baseUrl;
  }

  get$<InputType, OutputType>({
    url,
    queryParams,
    config,
  }: HttpRequest<InputType>): Observable<OutputType> {
    const requestUrl = this.baseUrl + url;
    let params = "";
    if (queryParams) params = this.serializeQueryParams(queryParams);

    return this.http
      .get<OutputType>(requestUrl + params)
      .pipe(tap(() => null, this.handleRequestError.bind(this)));
  }

  post$<InputType, OutputType>({
    url,
    body,
    queryParams,
  }: HttpRequest<InputType>): RequestOutput<OutputType> {
    const requestUrl = this.baseUrl + url;
    let params = "";
    if (queryParams) params = this.serializeQueryParams(queryParams);

    return this.http
      .post<HttpResponse<OutputType>>(requestUrl + params, body)
      .pipe(tap(() => null, this.handleRequestError.bind(this)));
  }

  delete$<InputType, OutputType>({
    url,
    queryParams,
  }: HttpRequest<InputType>): RequestOutput<OutputType> {
    const requestUrl = this.baseUrl + url;
    let params = "";
    if (queryParams) params = this.serializeQueryParams(queryParams);

    return this.http
      .delete<HttpResponse<OutputType>>(requestUrl + params)
      .pipe(tap(() => null, this.handleRequestError.bind(this)));
  }

  postFile$(
    fileToUpload: File,
    filePath = "UploadedDocuments",
  ): Observable<any> {
    const result: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    const endpoint = this.baseUrl + +"/Document";
    const formData: FormData = new FormData();
    formData.append("document", fileToUpload, fileToUpload.name);
    console.log(formData);
    this.http.post(endpoint, formData).subscribe(
      (response: any) => {
        result.next(response);
      },
      error => {
        result.next(error);
      },
    );
    return result;
  }

  put$<InputType, OutputType>({
    url,
    body,
    queryParams,
  }: HttpRequest<InputType>): RequestOutput<OutputType> {
    const requestUrl = this.baseUrl + url;
    let params = "";
    if (queryParams) params = this.serializeQueryParams(queryParams);

    return this.http
      .put<HttpResponse<OutputType>>(requestUrl + params, body)
      .pipe(tap(null, this.handleRequestError.bind(this)));
  }

  private serializeQueryParams(params: QueryParam[]): string {
    const serialized = params
      .map(param => param.name + "=" + param.value)
      .join("&");
    return "?" + serialized;
  }

  // private showMessage<T>(
  //   { success, message }: HttpResponse<T>,
  //   config?: RequestConfig,
  // ) {
  //   if (config && !config.showMessage) return;
  //   if (message) {
  //     const alertType: AlertType = success ? "SUCCESS" : "DANGER";
  //     this.alertService.showSnackbar({
  //       message,
  //       type: alertType,
  //     });
  //   }
  // }

  private handleRequestError({ error, status }: HttpErrorResponse) {
    if (status == 400) {
      this.alertService.showSnackbar({
        type: "DANGER",
        message: error.message,
      });
    }
  }
}
