import { Component, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.less']
})
export class StoryComponent {
  @Input() story: any;

  public isHoverDisabled: boolean = false;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.isHoverDisabled = this.route.snapshot.pathFromRoot.toString().includes('story');
  }
}