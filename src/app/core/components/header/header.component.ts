import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subject, Subscription, debounceTime, fromEvent, takeUntil} from 'rxjs';
import {authActions} from 'src/app/auth/store/actions';
import {selectCurrentUser} from 'src/app/auth/store/reducers';
import {AuthResponseInterface} from 'src/app/auth/types/authResponse.interface';
import {SearchBarService} from 'src/app/shared/services/search-bar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  subject$ = new Subject();

  @ViewChild('searchTerm') searchTerm: ElementRef | undefined;

  constructor(
    private store: Store,
    private searchBarService: SearchBarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isAuthenticated = true;
    }

    this.store
      .select(selectCurrentUser)
      .pipe(takeUntil(this.subject$))
      .subscribe((user: AuthResponseInterface | null | undefined) => {
        if (user?.idToken) {
          this.isAuthenticated = true;
        }
      });
  }

  ngOnDestroy(): void {
    this.subject$.next(null);
    this.subject$.complete();
  }

  logOut(): void {
    this.store.dispatch(authActions.logOut());

    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.isAuthenticated = false;
    location.reload();
  }

  setSearchTerm(): Subscription {
    const observableInput = fromEvent(this.searchTerm?.nativeElement, 'input');

    //Adding debounceTime for better user experience
    return observableInput
      .pipe(debounceTime(500))
      .pipe(takeUntil(this.subject$))
      .subscribe(() => {
        this.searchBarService.setSearchTerm(this.searchTerm?.nativeElement.value);
        this.router.navigateByUrl('/');
      });
  }
}
