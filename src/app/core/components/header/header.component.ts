import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectCurrentUser} from 'src/app/auth/store/reducers';
import {AuthResponseInterface} from 'src/app/auth/types/authResponse.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isAuthenticated = true;
    }
    
    this.store
      .select(selectCurrentUser)
      .subscribe((user: AuthResponseInterface | null | undefined) => {
        if (user) {
          this.isAuthenticated = true;
        }
      });
  }
}
