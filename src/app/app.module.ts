import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JobApplicationModule } from "./job-application/job-application.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    JobApplicationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
