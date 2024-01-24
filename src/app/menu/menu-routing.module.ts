import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from '@angular/router';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import { AddCategoryComponent } from './dialogs/add-category/add-category.component';

export const menuRoutes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
  },
  {
    path: 'add',
    component: AddCategoryComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class MenuRoutingModule {}
