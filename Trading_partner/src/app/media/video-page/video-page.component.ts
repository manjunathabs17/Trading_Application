import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css'],
})
export class VideoPageComponent implements OnInit {
  selectedLevel: string | null = null;

  youtubeEmbedUrl = 'https://www.youtube.com/embed/abc123'; // Replace with your own video's embed URL
  ngOnInit(): void {}
  selectLevel(level: any): void {
    this.selectedLevel = level.toString();
  }

  showDiv: boolean = true;

  openLevel1() {
    this.showDiv = !this.showDiv;
  }
}
