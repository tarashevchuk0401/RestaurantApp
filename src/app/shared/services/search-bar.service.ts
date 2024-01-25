import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  public searchTerm: Subject<string> = new Subject<string>();

  constructor() {}

  setSearchTerm(keyword: string) {
    this.searchTerm.next(keyword);
  }

  listenSearchTerm(): Observable<string> {
    return this.searchTerm.asObservable();
  }
}
