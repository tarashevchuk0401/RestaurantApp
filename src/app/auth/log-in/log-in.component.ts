import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AuthRequestInterface } from '../types/authRequest.interface';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  errorMessage: string = '';

  constructor(private authService: AuthService){}

  onSubmitLogIn(form: NgForm){
    const request: AuthRequestInterface = {
      email : form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }

    this.authService.logIn(request).subscribe(d => console.log(d))
  }

}
