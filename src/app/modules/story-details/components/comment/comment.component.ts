import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnChanges {
  @Input() comment: any;
  @Input() firstLevel: boolean;

  public showMoreComments: boolean = false;

  constructor() {}

  public ngOnChanges(): void {
    this.showMoreComments = !!this.firstLevel;
  }

  public expandHandler(): void {
    this.showMoreComments = !this.showMoreComments;
  }
}