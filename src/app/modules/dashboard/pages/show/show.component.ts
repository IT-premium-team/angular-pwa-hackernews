import { Component } from '@angular/core';

import { StoriesBaseComponent } from '../stories-base/stories-base.component';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
})
export class ShowComponent extends StoriesBaseComponent {
  constructor(
    public dataService: DataService,
  ) {
    super(dataService);
    this.storyPromise = dataService.getShownHNStories().toPromise();
  }
}