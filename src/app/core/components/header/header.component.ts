import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  public navLinks = [
    { path: '/dashboard/ask', label: 'Ask' },
    { path: '/dashboard/jobs', label: 'Jobs' },
    { path: '/dashboard/trending', label: 'Trending' },
    { path: '/dashboard/new-posts', label: 'New posts' },
    { path: '/dashboard/show', label: 'Show' },
  ];

  constructor() {}
}