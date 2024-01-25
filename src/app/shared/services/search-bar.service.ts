import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService  {

 public searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>('init');
  
  constructor() { 
    this.searchTerm.subscribe(d => console.log(d))
  }


  setSearchTerm(keyword: string){
    this.searchTerm.next(keyword);
  }

}
