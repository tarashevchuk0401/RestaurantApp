import {Component, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthRequestInterface} from '../types/authRequest.interface';
import {AuthStateInterface} from '../types/authState.interface';
import {Store} from '@ngrx/store';
import {authActions} from '../store/actions';
import {selectCurrentUser, selectValidationErrors} from '../store/reducers';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnDestroy {
  errorMessage: string = '';
  unsubscribing$ = new Subject();

  constructor(private store: Store<{auth: AuthStateInterface}>) {}

  onSubmitSignUp(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const request: AuthRequestInterface = {
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true,
    };

    this.store.dispatch(authActions.signUp({request}));

    this.store
      .select(selectCurrentUser)
      .pipe(takeUntil(this.unsubscribing$))
      .subscribe((d) => console.log(d));

    this.store
      .select(selectValidationErrors)
      .pipe(takeUntil(this.unsubscribing$))
      .subscribe((response) => {
        if (response) {
          this.errorMessage = String(response).replaceAll('_', ' ');
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribing$.next(null);
    this.unsubscribing$.complete();
  }
}
