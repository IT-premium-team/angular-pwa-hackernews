import { Observable, forkJoin } from 'rxjs';

export function retrieveItems(idList: number[], callback): Observable<any> {
  const observables: Observable<any>[] = [];
  idList.forEach(id => observables.push(callback(id)));
  return forkJoin(...observables);
}