import { Component } from "@angular/core";

import { StoriesBaseComponent } from '../stories-base/stories-base.component';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
})
export class TrendingComponent extends StoriesBaseComponent {
  constructor(
    public dataService: DataService,
  ) {
    super(dataService);
    this.storyPromise = dataService.getTopStories().toPromise();
  }
}