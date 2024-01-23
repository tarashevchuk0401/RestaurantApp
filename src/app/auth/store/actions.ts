import {createAction, createActionGroup, props} from '@ngrx/store';
import {AuthRequestInterface} from '../types/authRequest.interface';
import {AuthResponseInterface} from '../types/authResponse.interface';
import {BackendError} from 'src/app/shared/types/backendError.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    SignUp: props<{request: AuthRequestInterface}>(),
    'SignUp success': props<{response: AuthResponseInterface}>(),
    'SignUp failed': props<{error: BackendError}>(),

    LogIn: props<{request: AuthRequestInterface}>(),
    'LogIn success': props<{response: AuthResponseInterface}>(),
    'LogIn failed': props<{error: BackendError}>(),
  },
});
