import { QueryParam } from "./query-param";

export interface HttpRequest<T> {
  url: string;
  queryParams?: QueryParam[];
  body?: T;
  config?: RequestConfig;
}

export interface RequestConfig {
  showMessage: boolean;
}
