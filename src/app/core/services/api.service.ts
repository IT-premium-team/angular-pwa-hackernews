import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiHost: string = 'https://hacker-news.firebaseio.com/v0';

  constructor(
    private http: HttpClient,
  ) {}

  public get(route: string, params?: any): Observable<any> {
    return this.http.get(`${this.apiHost}/${route}`, params);
  }

  public post(route: string, data: any, params?: any): Observable<any> {
    return this.http.post(`${this.apiHost}/${route}`, data, params);
  }

  public put(route: string, data: any, params?: any): Observable<any> {
    return this.http.put(`${this.apiHost}/${route}`, data, params);
  }

  public delete(route: string, params?: any): Observable<any> {
    return this.http.delete(`${this.apiHost}/${route}`, params);
  }
}