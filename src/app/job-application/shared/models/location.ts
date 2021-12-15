export interface Point {
  lng: number;
  lat: number;
}

export interface Location {
  type: string;
  data: Point;
}
