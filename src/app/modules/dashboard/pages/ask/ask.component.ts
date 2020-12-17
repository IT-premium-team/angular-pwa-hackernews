import { Component } from '@angular/core';

import { StoriesBaseComponent } from '../stories-base/stories-base.component';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
})
export class AskComponent extends StoriesBaseComponent{
  constructor(
    public dataService: DataService,
  ) {
    super(dataService);
    this.storyPromise = dataService.getAskedHNStories().toPromise();
  }
}