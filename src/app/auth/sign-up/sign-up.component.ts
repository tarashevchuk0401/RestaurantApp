import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  errorMessage: string = '';

  onSubmitSignUp(form: NgForm): void {
    console.log(form);
  }
}
