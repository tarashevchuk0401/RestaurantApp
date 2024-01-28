import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
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
export class SignUpComponent implements OnDestroy, OnInit {
  errorMessage: string = '';
  unsubscribing$ = new Subject();
  signUpForm!: FormGroup;

  constructor(private store: Store<{auth: AuthStateInterface}>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6) ]],
    })
  }

  onSubmitSignUp(form: FormGroup): void {
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
