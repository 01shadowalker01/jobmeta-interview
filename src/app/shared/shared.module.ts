import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { FileUploaderComponent } from "./file-uploader/file-uploader.component";

@NgModule({
  declarations: [FileUploaderComponent],
  imports: [CommonModule, MatIconModule, MatProgressBarModule, MatInputModule],
  exports: [FileUploaderComponent],
})
export class SharedModule {}
