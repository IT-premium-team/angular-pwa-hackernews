import { Component } from '@angular/core';

import { StoriesBaseComponent } from '../stories-base/stories-base.component';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-new-posts',
  templateUrl: './new-posts.component.html',
})
export class NewPostsComponent extends StoriesBaseComponent {
  constructor(
    public dataService: DataService,
  ) {
    super(dataService);
    this.storyPromise = dataService.getNewStories().toPromise();
  }
}