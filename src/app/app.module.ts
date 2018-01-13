import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from "ng2-file-upload";

import { AuthService } from './services/auth.service';
import { TravelPostService } from './services/travel-post.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TravelPostComponent } from './travel-post/travel-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PromotionsComponent } from './promotions/promotions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TravelPostComponent,
    NotFoundComponent,
    MainPageComponent,
    PromotionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    FileUploadModule,
  ],
  providers: [
    AuthService,
    TravelPostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
