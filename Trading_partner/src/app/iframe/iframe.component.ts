import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css'],
})
export class IframeComponent {
  @Output() urlEntered: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('iframeContainer') iframeContainer!: ElementRef;
  @ViewChildren('iframe') iframes!: QueryList<ElementRef>;

  enteredUrls: string[] = [];

  url1: string = '';
  url2: string = '';
  url3: string = '';
  url4: string = '';
  submitClicked: boolean = false;
  selectedUrl: any;
  // iframe: any;

  constructor(private router: Router) {}

  openIframes() {
    console.log(this.url1);
    const urls = [this.url1, this.url2, this.url3, this.url4];
    // this.router.navigate(['/home-page'], { state: { urls } });
    this.submitClicked = true;
    this.clearIframes();
    // this.resetInputFields();

    // if (this.url1) {
    //   this.enteredUrls.push(this.url1);
    //   this.url1 = ''; // Clear the input field
    // }
  }

  private resetInputFields() {
    this.url1 = '';
    this.url2 = '';
    this.url3 = '';
    this.url4 = '';
  }

  clearIframes() {
    this.iframeContainer.nativeElement.innerHTML = '';
  }

  reset() {
    this.selectedUrl = '';
    this.url1 = '';
    this.url2 = '';
    this.url3 = '';
    this.url4 = '';
    this.clearIframes();
  }

  // displayIframe() {
  //   if (this.url) {
  //     this.urlEntered.emit(this.url);
  //     this.url = ''; // Clear the input field
  //   }
  // }

  loading: boolean = false;

  loadIframe(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  clearUrl(field: string) {
    switch (field) {
      case 'url1':
        this.url1 = '';
        break;
      case 'url2':
        this.url2 = '';
        break;
      case 'url3':
        this.url3 = '';
        break;
      case 'url4':
        this.url4 = '';
        break;
    }
  }
}
