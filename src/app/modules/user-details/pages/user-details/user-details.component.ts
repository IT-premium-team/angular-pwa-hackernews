import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { DataService } from 'src/app/core/services/data.service';
import { cutArray } from 'src/app/shared/helpers/cut-array';
import { retrieveItems } from 'src/app/shared/helpers/retrieve-items';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {
  private userId: string;
  private submittedIds: number[];

  public user: any;
  public isUserLoaded: boolean = false;
  public areSubmittedHidden: boolean = true;
  public totalPagesCount: number = 0;

  public submitted$: Observable<any>;
  public paginatorConfig = {
    pageIndex: 0,
    totalItemCount:  0,
    itemsPerPage: 10,
    pageSizeOptions: [10, 30, 50],
  };

  private getSubmittedItems(currentPage: number = 1,): void {
    const processedData = cutArray(this.submittedIds, currentPage, this.paginatorConfig.itemsPerPage);
    this.paginatorConfig.pageIndex = currentPage === 1 ? 0 : currentPage - 1;
    this.totalPagesCount = processedData.totalPages;
    this.submitted$ =
      retrieveItems(processedData.list, (id: number) => this.dataService.getItem(id))
      .pipe(catchError(err => { console.error(err); return of({})}));
  }

  private async loadUser(): Promise<any> {
    try {
      this.user = await this.dataService
        .getUser(this.userId)
        .toPromise();
      this.isUserLoaded = true;
      this.submittedIds = this.user.submitted;
      this.paginatorConfig.totalItemCount = this.user.submitted.length;

      this.getSubmittedItems();
    } catch (err) {
      console.log(err);
    }
  }

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {}

  public ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.loadUser();
  }

  public toggleSubmitted(): void {
    this.areSubmittedHidden = !this.areSubmittedHidden;
  }

  public triggerPageChanges(pageObj: any): void {
    this.paginatorConfig.itemsPerPage = pageObj.pageSize;
    this.getSubmittedItems(pageObj.pageIndex + 1);
  }
}