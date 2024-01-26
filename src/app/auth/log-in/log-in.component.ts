import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthRequestInterface} from '../types/authRequest.interface';
import {Store} from '@ngrx/store';
import {AuthStateInterface} from '../types/authState.interface';
import {authActions} from '../store/actions';
import {selectCurrentUser, selectValidationErrors} from '../store/reducers';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnDestroy, OnInit {
  errorMessage: string = '';
  unsubscribing$ = new Subject();
  logInForm!: FormGroup;

  constructor(private store: Store<{auth: AuthStateInterface}> , private fb: FormBuilder) {}

  ngOnInit(): void {
    this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  onSubmitLogIn(form: FormGroup): void {
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
