import { Injectable } from "@angular/core";
import { AlertComponent } from "../../components/alert/alert.component";
import { AlertType } from "../alert-type";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Alert } from "../models/alert";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  showSnackbar({ type, message, duration }: Alert) {
    let panelClass = "alert-info";
    switch (type) {
      case "DEFAULT":
        panelClass = "alert-default";
        break;
      case "DANGER":
        panelClass = "alert-danger";
        break;
      case "SUCCESS":
        panelClass = "alert-success";
        break;
      case "WARNING":
        panelClass = "alert-warning";
        break;
    }
    this.snackBar.openFromComponent(AlertComponent, {
      data: { message, type },
      panelClass,
      duration: duration || 2500,
    });
  }
}
