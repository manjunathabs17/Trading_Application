import { LearnComponent } from './components/learn/learn.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { IframeComponent } from './iframe/iframe.component';
import { VideoPageComponent } from './media/video-page/video-page.component';
import { DocumentPageComponent } from './media/document-page/document-page.component';

const routes: Routes = [
  // { path: '', component: HomePageComponent },
  { path: '', component: IframeComponent },
  {
    path: 'learn',
    component: LearnComponent,
  },
  {
    path: 'vedio',
    component: VideoPageComponent,
  },
  {
    path: 'documents',
    component: DocumentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
