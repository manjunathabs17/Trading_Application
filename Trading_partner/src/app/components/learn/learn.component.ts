import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
})
export class LearnComponent implements OnInit {
  // constructor(activateRoute: ActivatedRoute) {}
  constructor(private router: Router) {}
  openInNewPage(item: string): void {
    // Navigate to the content display component with the selected item
    this.router.navigate(['/vedio']);
    // this.router.navigate(['/documents']);
  }
  openDocumnets(item: string): void {
    // Navigate to the content display component with the selected item
    // this.router.navigate(['/vedio']);
    this.router.navigate(['/documents']);
  }

  ngOnInit(): void {}
}
