//

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./Areas/home/home.component";
import {YoutubePlaygroundComponent} from "./Playgrounds/youtube-playground/youtube-playground.component";
import {PdfPlaygroundComponent} from "./Playgrounds/pdf-playground/pdf-playground.component";
import {AboutComponent} from "./Areas/about/about.component";
import {CoursesComponent} from "./Areas/courses/courses.component";
import {ProgressSpinnerComponent} from "./Playgrounds/progress-spinner/progress-spinner.component";
import {CustomThemePlaygroundComponent} from "./Playgrounds/custom-theme-playground/custom-theme-playground.component";
import {DragDropPlaygroundComponent} from "./Playgrounds/drag-drop-playground/drag-drop-playground.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'playgrounds/youtube', component: YoutubePlaygroundComponent},
  {path: 'playgrounds/pdf', component: PdfPlaygroundComponent},
  {path: 'playgrounds/progress-spinner', component: ProgressSpinnerComponent},
  {path: 'playgrounds/custom-theme', component: CustomThemePlaygroundComponent},
  {path: 'playgrounds/drag-drop', component: DragDropPlaygroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
