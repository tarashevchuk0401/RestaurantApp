import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {firebaseConfig} from 'src/environment/entironment';
import {AuthRequestInterface} from '../types/authRequest.interface';
import {Observable} from 'rxjs';
import {AuthResponseInterface} from '../types/authResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(request: AuthRequestInterface): Observable<AuthResponseInterface> {
    return this.http.post<AuthResponseInterface>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
        firebaseConfig.apiKey,
      request
    );
  }

  logIn(request: AuthRequestInterface): Observable<AuthResponseInterface> {
    return this.http.post<AuthResponseInterface>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
        firebaseConfig.apiKey,
      request
    );
  }
}
