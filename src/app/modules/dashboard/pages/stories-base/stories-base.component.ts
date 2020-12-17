import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { retrieveItems } from 'src/app/shared/helpers/retrieve-items';
import { cutArray } from 'src/app/shared/helpers/cut-array';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: '',
  template: ''
})
export class StoriesBaseComponent implements OnInit {
  protected storyPromise: Promise<any>;
  protected data: number[];

  public stories$: Observable<any>;

  public paginatorConfig = {
    pageIndex: 0,
    totalItemCount:  0,
    itemsPerPage: 5,
    pageSizeOptions: [5, 10, 25, 50],
  };
  
  public totalPagesCount: number = 0;
  public isLoaded: boolean = false;

  private getStoriesForPage(currentPage: number = 1): void {
    const processedData = cutArray(this.data, currentPage, this.paginatorConfig.itemsPerPage);
    this.paginatorConfig.pageIndex = currentPage === 1 ? 0 : currentPage - 1;
    this.totalPagesCount = processedData.totalPages;
    this.stories$ =
      retrieveItems(processedData.list, (id: number) => this.dataService.getItem(id))
      .pipe(catchError(err => { console.error(err); return of({})}));
  }

  private async loadStories(): Promise<void> {
    try {
      this.data = await this.storyPromise;
      this.paginatorConfig.totalItemCount = this.data.length;
      this.getStoriesForPage();
    } catch (err) {
      console.error(err);
      this.stories$ = of({});
    }
  }

  constructor(
    public dataService: DataService,
  ) {}

  public ngOnInit(): void {
    this.loadStories();
  }

  public triggerPageChanges(pageObj: any): void {
    this.paginatorConfig.itemsPerPage = pageObj.pageSize;
    this.getStoriesForPage(pageObj.pageIndex + 1);
  }
}