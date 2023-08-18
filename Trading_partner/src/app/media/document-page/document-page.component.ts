import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.css'],
})
export class DocumentPageComponent implements OnInit {
  constructor() {}
  showDropdown: boolean = false;
  // selectedLevel: number | null = null;
  shouldShowDiv: boolean = true;
  selectedLevel: string | null = null;

  ngOnInit(): void {}
  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  // selectLevel(level: number): void {
  //   this.selectedLevel = level;
  //   this.showDropdown = false;
  // }

  // selectLevel(level: any): void {
  //   this.selectedLevel = level.toString();
  // }

  selectLevel(level: any): void {
    this.selectedLevel = level.toString();
  }
}
