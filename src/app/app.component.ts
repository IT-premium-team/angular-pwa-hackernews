import { Component, AfterViewInit } from '@angular/core';

import { PwaService } from './core/services/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  constructor(
    private pwaService: PwaService,
  ) {}

  public ngAfterViewInit(): void {
    if (this.pwaService.promptEvent != null) {
      this.pwaService.promptEvent.prompt();
    }
  }
}
