import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import {
  HttpRequest,
  QueryParam,
} from "../models";
import { AlertService } from "../modules/alert";

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

    return this.http.get<OutputType>(requestUrl + params).pipe(
      tap(() => null, this.handleRequestError.bind(this)),
      catchError(err => this.catchError<OutputType>(err)),
    );
  }

  post$<InputType, OutputType>({
    url,
    body,
    queryParams,
  }: HttpRequest<InputType>): Observable<OutputType> {
    const requestUrl = this.baseUrl + url;
    let params = "";
    if (queryParams) params = this.serializeQueryParams(queryParams);

    return this.http.post<OutputType>(requestUrl + params, body).pipe(
      tap(() => null, this.handleRequestError.bind(this)),
      catchError(err => this.catchError<OutputType>(err)),
    );
  }

  delete$<InputType, OutputType>({
    url,
    queryParams,
  }: HttpRequest<InputType>): Observable<OutputType> {
    const requestUrl = this.baseUrl + url;
    let params = "";
    if (queryParams) params = this.serializeQueryParams(queryParams);

    return this.http.delete<OutputType>(requestUrl + params).pipe(
      tap(() => null, this.handleRequestError.bind(this)),
      catchError(err => this.catchError<OutputType>(err)),
    );
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
  }: HttpRequest<InputType>): Observable<OutputType> {
    const requestUrl = this.baseUrl + url;
    let params = "";
    if (queryParams) params = this.serializeQueryParams(queryParams);

    return this.http.put<OutputType>(requestUrl + params, body).pipe(
      tap(() => null, this.handleRequestError.bind(this)),
      catchError(err => this.catchError<OutputType>(err)),
    );
  }

  private serializeQueryParams(params: QueryParam[]): string {
    const serialized = params
      .map(param => param.name + "=" + param.value)
      .join("&");
    return "?" + serialized;
  }

  private catchError<T>(error: HttpErrorResponse): Observable<T> {
    this.handleRequestError(error);
    return new Observable<T>();
  }

  private handleRequestError({ error }: HttpErrorResponse) {
    this.alertService.showSnackbar({
      type: "DANGER",
      message: error.message,
    });
  }
}
