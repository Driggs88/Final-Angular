import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SessionService } from "./session.service";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FileUploadModule } from "ng2-file-upload";
import { HomePageComponent } from './home-page/home-page.component';
import { TravelPostComponent } from './travel-post/travel-post.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TravelPostComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FileUploadModule,
  ],
  providers: [ SessionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
