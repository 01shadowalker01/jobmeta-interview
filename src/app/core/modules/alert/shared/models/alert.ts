import { AlertType } from "../alert-type";

export interface Alert {
  message: string;
  type: AlertType;
  duration?: number;
}
