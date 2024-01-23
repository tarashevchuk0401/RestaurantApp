import {Component, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthRequestInterface} from '../types/authRequest.interface';
import {Store} from '@ngrx/store';
import {AuthStateInterface} from '../types/authState.interface';
import {authActions} from '../store/actions';
import {selectCurrentUser, selectValidationErrors} from '../store/reducers';
import {Subject, takeUntil} from 'rxjs';
import { BackendError } from 'src/app/shared/types/backendError.interface';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnDestroy {
  errorMessage:  string = '' ;
  unsubscribing$ = new Subject();

  constructor(private store: Store<{auth: AuthStateInterface}>) {}

  onSubmitLogIn(form: NgForm): void {
    const request: AuthRequestInterface = {
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true,
    };

    this.store.dispatch(authActions.logIn({request}));
    this.store
      .select(selectCurrentUser)
      .pipe(takeUntil(this.unsubscribing$))
      .subscribe((d) => console.log(d));

    this.store.select(selectValidationErrors)
    .pipe(takeUntil(this.unsubscribing$))
    .subscribe(response => {
      if(response){
        this.errorMessage = String(response).replaceAll('_', ' ')
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscribing$.next(null);
    this.unsubscribing$.complete();
  }
}
