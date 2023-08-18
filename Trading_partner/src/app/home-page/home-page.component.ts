import { DOCUMENT } from '@angular/common';

import {
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
interface Iframe {
  url: string;
  isFullScreen: boolean;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, OnChanges {
  url: string = '';
  @Input() url1: any;
  @Input() url2: any;
  @Input() url3: any;
  @Input() url4: any;

  webPageUrl: string = '';

  searchQuery: string = '';
  searchUrl: string = '';

  urls: string[] = [];

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.url1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url1);
    this.url2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
    this.url3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url3);
    this.url4 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url4);
  }

  ngOnInit(): void {
    this.urls = history.state.urls || [];
  }

  isIframe1FullScreen = false;
  isIframe2FullScreen = false;
  isIframe3FullScreen = false;
  isIframe4FullScreen = false;
  isIframe5FullScreen = false;
  isIframe6FullScreen = false;

  toggleFullScreen(iframeNumber: number) {
    switch (iframeNumber) {
      case 1:
        this.toggleFullscreen(this.isIframe1FullScreen, 'iframe1');
        this.isIframe1FullScreen = !this.isIframe1FullScreen;
        break;
      case 2:
        this.toggleFullscreen(this.isIframe2FullScreen, 'iframe2');
        this.isIframe2FullScreen = !this.isIframe2FullScreen;
        break;
      case 3:
        this.toggleFullscreen(this.isIframe3FullScreen, 'iframe3');
        this.isIframe3FullScreen = !this.isIframe3FullScreen;
        break;
      case 4:
        this.toggleFullscreen(this.isIframe4FullScreen, 'iframe4');
        this.isIframe4FullScreen = !this.isIframe4FullScreen;
        break;
      case 5:
        this.toggleFullscreen(this.isIframe5FullScreen, 'window');
        this.isIframe5FullScreen = !this.isIframe5FullScreen;
        break;
      case 6:
        this.toggleFullscreen(this.isIframe6FullScreen, 'window2');
        this.isIframe6FullScreen = !this.isIframe6FullScreen;
        break;
      default:
        break;
    }
  }

  // Function to toggle full-screen using Fullscreen API
  toggleFullscreen(isFullScreen: boolean, iframeId: string) {
    const iframeElement = document.getElementById(iframeId) as HTMLElement;

    if (!isFullScreen) {
      if (iframeElement?.requestFullscreen) {
        iframeElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // Function to exit full-screen
  exitFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  loadWebPage() {
    this.webPageUrl = this.url;
    // console.log(this.webPageUrl);
  }

  // ========================================================4===================================

  url1_load: boolean = true;
  loadframe1(): void {
    this.url1_load = true;
  }
  url2_load: boolean = true;
  loadframe2(): void {
    this.url2_load = true;
  }
  url3_load: boolean = true;
  loadframe3(): void {
    this.url3_load = true;
  }
  url4_load: boolean = true;
  loadframe4(): void {
    this.url4_load = true;
  }
}
// url1 = 'https://google.com/search?igu=1';
