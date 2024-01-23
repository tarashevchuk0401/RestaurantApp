import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {AuthRequestInterface} from '../types/authRequest.interface';
import {Store} from '@ngrx/store';
import {AuthStateInterface} from '../types/authState.interface';
import {authActions} from '../store/actions';
import {selectCurrentUser} from '../store/reducers';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private store: Store<{auth: AuthStateInterface}>
  ) {}

  onSubmitLogIn(form: NgForm) {
    const request: AuthRequestInterface = {
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true,
    };

    this.store.dispatch(authActions.logIn({request}));
    this.store.select(selectCurrentUser).subscribe((d) => console.log(d));
  }
}
