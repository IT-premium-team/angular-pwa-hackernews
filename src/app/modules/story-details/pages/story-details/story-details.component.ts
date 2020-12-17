import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data.service';


@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.less']
})
export class StoryDetailsComponent implements OnInit {
  private storyId: string;

  public story$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {}

  public ngOnInit(): void {
    this.storyId =  this.route.snapshot.paramMap.get('id');
    this.story$ = this.dataService
      .getItem(Number(this.storyId))
      .pipe(catchError(err => { console.error(err); return of({error: true})}));
  }
}