import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {firebaseConfig} from 'src/environment/entironment';
import {AuthRequestInterface} from '../types/authRequest.interface';
import {Observable, tap} from 'rxjs';
import {AuthResponseInterface} from '../types/authResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(request: AuthRequestInterface): Observable<AuthResponseInterface> {
    return this.http
      .post<AuthResponseInterface>(
        firebaseConfig.endpoints.signUp + firebaseConfig.apiKey,
        request
      )
      .pipe(
        tap((response) => {
          // Set to LocalStorage
          localStorage.setItem('id', response.localId);
          return localStorage.setItem('token', response.idToken);
        })
      );
  }

  logIn(request: AuthRequestInterface): Observable<AuthResponseInterface> {
    return this.http
      .post<AuthResponseInterface>(
        firebaseConfig.endpoints.logIn + firebaseConfig.apiKey,
        request
      )
      .pipe(
        tap((response) => {
          // Set to LocalStorage
          localStorage.setItem('id', response.localId);
          return localStorage.setItem('token', response.idToken);
        })
      );
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }
}
