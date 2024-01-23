import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AuthRequestInterface } from '../types/authRequest.interface';
import { auth } from 'firebase-functions/v1';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  errorMessage: string = '';

  constructor(private authService: AuthService){}

  onSubmitSignUp(form: NgForm): void {
    const request: AuthRequestInterface = {
      email : form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }

    this.authService.signUp(request).subscribe()
  }
}
