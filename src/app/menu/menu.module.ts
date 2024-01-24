import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MenuRoutingModule, menuRoutes } from './menu-routing.module';
import { RouterModule } from '@angular/router';
import { AddCategoryComponent } from './dialogs/add-category/add-category.component';
import { MaterialsModule } from '../shared/materials.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { DataBaseService } from './services/data-base.service';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import * as menuEffects from './store/effects'
import * as menuReducer from './store/reducers'
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    MainMenuComponent,
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(menuRoutes),
       
    StoreModule.forFeature('menu', menuReducer.menuReducer),
    EffectsModule.forFeature([menuEffects]),
  ],
  providers: [
    DataBaseService
  ]
})
export class MenuModule { }
