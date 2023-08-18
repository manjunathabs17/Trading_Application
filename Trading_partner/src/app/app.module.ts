import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { IframeComponent } from './iframe/iframe.component';
import { LearnComponent } from './components/learn/learn.component';
import { VideoPageComponent } from './media/video-page/video-page.component';
import { DocumentPageComponent } from './media/document-page/document-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, IframeComponent, LearnComponent, VideoPageComponent, DocumentPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
