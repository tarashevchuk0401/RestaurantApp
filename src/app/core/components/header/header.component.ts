import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import { debounceTime, fromEvent, switchMap } from 'rxjs';
import {authActions} from 'src/app/auth/store/actions';
import {selectCurrentUser} from 'src/app/auth/store/reducers';
import {AuthResponseInterface} from 'src/app/auth/types/authResponse.interface';
import {SearchBarService} from 'src/app/shared/services/search-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  keyWord:string = '';

  // @ViewChild ('searchTerm') searchTerm : ElementRef | undefined;

  constructor(
    private store: Store,
    private searchBarService: SearchBarService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isAuthenticated = true;
    }

    this.store
      .select(selectCurrentUser)
      .subscribe((user: AuthResponseInterface | null | undefined) => {
        if (user?.idToken) {
          this.isAuthenticated = true;
        }
      });
  }

  logOut(): void {
    this.store.dispatch(authActions.logOut());

    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.isAuthenticated = false;
  }

  setSearchTerm() {
    this.searchBarService.setSearchTerm(this.keyWord)
    
  }
  
 
}
