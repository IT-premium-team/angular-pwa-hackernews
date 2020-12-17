import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from 'src/app/core/services/api.service';
import { IUser } from 'src/app/shared/models/user';
import { IUpdates } from 'src/app/shared/models/updates';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private apiService: ApiService,
  ) {}

  public getUser(id: string): Observable<IUser> {
    return this.apiService.get(`user/${id}.json`);
  }

  public getItem(id: number): Observable<any> {
    return this.apiService.get(`item/${id}.json`);
  }

  // item with longest id
  public getMaxItemId(): Observable<number> {
    return this.apiService.get('maxitem.json')
  }

  // top 500s
  public getTopStories(): Observable<any> {
    return this.apiService.get('topstories.json');
  }

  // top 500
  public getNewStories(): Observable<any> {
    return this.apiService.get('newstories.json');
  }

  // top 500
  public getBestStories(): Observable<any> {
    return this.apiService.get('beststories.json');
  }

  // up to 200
  public getAskedHNStories(): Observable<any> {
    return this.apiService.get('askstories.json');
  }

  // up to 200
  public getShownHNStories(): Observable<any> {
    return this.apiService.get('showstories.json');
  }

  // up to 200
  public getJobHNStories(): Observable<any> {
    return this.apiService.get('jobstories.json');
  }

  public getUpdates(): Observable<IUpdates> {
    return this.apiService.get('updates.json')
  }
}