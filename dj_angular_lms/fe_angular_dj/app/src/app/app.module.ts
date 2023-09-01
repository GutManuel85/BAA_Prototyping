import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { StylingPlaygroundComponent } from './Playgrounds/styling-playground/styling-playground.component';
import { HeaderComponent } from './Layout/header/header.component';
import {RouterOutlet} from "@angular/router";
import { FooterComponent } from './Layout/footer/footer.component';
import { TitleAreaComponent } from './Layout/title-area/title-area.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Areas/home/home.component';
import { YoutubePlaygroundComponent } from './Playgrounds/youtube-playground/youtube-playground.component';
import { YoutubePlayerComponent } from './Tools/youtube-player/youtube-player.component';
import {YouTubePlayerModule} from "@angular/youtube-player";
import { PdfPlaygroundComponent } from './Playgrounds/pdf-playground/pdf-playground.component';
import { AboutComponent } from './Areas/about/about.component';
import { CoursesComponent } from './Areas/courses/courses.component';
import { ProgressSpinnerComponent } from './Playgrounds/progress-spinner/progress-spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { CustomThemePlaygroundComponent } from './Playgrounds/custom-theme-playground/custom-theme-playground.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import { DragDropPlaygroundComponent } from './Playgrounds/drag-drop-playground/drag-drop-playground.component';
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import { ResultCheckComponent } from './Tools/result-check/result-check.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    StylingPlaygroundComponent,
    HeaderComponent,
    FooterComponent,
    TitleAreaComponent,
    HomeComponent,
    YoutubePlaygroundComponent,
    YoutubePlayerComponent,
    PdfPlaygroundComponent,
    AboutComponent,
    CoursesComponent,
    ProgressSpinnerComponent,
    CustomThemePlaygroundComponent,
    DragDropPlaygroundComponent,
    ResultCheckComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterOutlet,
    AppRoutingModule,
    YouTubePlayerModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatIconModule,
    CdkDrag,
    CdkDropList,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
