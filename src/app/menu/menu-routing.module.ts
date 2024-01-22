import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from '@angular/router';
import {MainMenuComponent} from './components/main-menu/main-menu.component';

export const menuRoutes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class MenuRoutingModule {}
