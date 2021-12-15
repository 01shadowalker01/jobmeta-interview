import { Observable } from "rxjs";

export type RequestOutput<T> = Observable<HttpResponse<T>>;

export interface HttpResponse<T> {
  itemsReceived: number;
  curPage: number;
  nextPage: number;
  prevPage: number | null;
  itemsTotal: number;
  pageTotal: number;
  items: T[];
}
