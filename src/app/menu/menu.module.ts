import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MenuRoutingModule, menuRoutes } from './menu-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    RouterModule.forChild(menuRoutes)
  ]
})
export class MenuModule { }
