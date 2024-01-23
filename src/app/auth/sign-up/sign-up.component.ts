import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {AuthRequestInterface} from '../types/authRequest.interface';
import {auth} from 'firebase-functions/v1';
import {AuthStateInterface} from '../types/authState.interface';
import {Store} from '@ngrx/store';
import {authActions} from '../store/actions';
import {selectCurrentUser} from '../store/reducers';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private store: Store<{auth: AuthStateInterface}>
  ) {}

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

    this.store.select(selectCurrentUser).subscribe((d) => console.log(d));
  }
}
