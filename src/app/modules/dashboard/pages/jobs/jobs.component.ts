import { Component } from '@angular/core';

import { StoriesBaseComponent } from '../stories-base/stories-base.component';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
})
export class JobsComponent extends StoriesBaseComponent {
  constructor(
    public dataService: DataService,
  ) {
    super(dataService);
    this.storyPromise = dataService.getJobHNStories().toPromise();
  }
}