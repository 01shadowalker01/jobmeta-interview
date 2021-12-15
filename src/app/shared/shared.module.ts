import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { FileUploaderComponent } from "./file-uploader/file-uploader.component";
import { CustomPaginatorComponent } from "./custom-paginator/custom-paginator.component";

@NgModule({
  declarations: [FileUploaderComponent, CustomPaginatorComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [FileUploaderComponent, CustomPaginatorComponent],
})
export class SharedModule {}
