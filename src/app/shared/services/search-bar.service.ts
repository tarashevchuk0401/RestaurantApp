import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  public searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>('init');

  constructor() {
    this.searchTerm.subscribe((d) => console.log(d));
  }

  setSearchTerm(keyword: string) {
    this.searchTerm.next(keyword);
  }

  listenSearchTerm(): Observable<string> {
    return this.searchTerm.asObservable();
  }
}
