import { Component, Input, OnChanges } from "@angular/core";

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { retrieveItems } from 'src/app/shared/helpers/retrieve-items';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.less']
})
export class ThreadComponent implements OnChanges {
  @Input() kids: number[];
  @Input() showOnInitial: boolean;

  public thread$: Observable<any>;

  constructor(
    private dataService: DataService,
  ) {}

  public ngOnChanges(): void {
    if (this.kids != null && this.kids.length !== 0) {
      this.thread$ =
        retrieveItems(this.kids, (id: number) => this.dataService.getItem(id))
        .pipe(catchError(err => { console.error(err); return of({}) }));
    } else {
      this.thread$ = of([]);
    }
  }
}