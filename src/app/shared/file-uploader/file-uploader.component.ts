import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "shw-file-uploader",
  templateUrl: "./file-uploader.component.html",
  styleUrls: ["./file-uploader.component.scss"],
})
export class FileUploaderComponent {
  @Input() isUploading: boolean = false;
  @Output() fileAdded = new EventEmitter<File>();

  onFileChange(fileUploaderRef: any) {
    if (fileUploaderRef.files && fileUploaderRef.files.length) {
      const [file] = fileUploaderRef.files;
      fileUploaderRef.parentElement?.append(file.name);
      this.fileAdded.emit(file);
    }
  }
}
