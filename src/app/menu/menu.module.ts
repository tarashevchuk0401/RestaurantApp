import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {MenuRoutingModule, menuRoutes} from './menu-routing.module';
import {RouterModule} from '@angular/router';
import {AddCategoryComponent} from './dialogs/add-category/add-category.component';
import {MaterialsModule} from '../shared/materials.module';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {DataBaseService} from './services/data-base.service';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';

import * as menuEffects from './store/effects';
import * as menuReducer from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {AddDishComponent} from './dialogs/add-dish/add-dish.component';
import {TruncatePipe} from '../shared/pipes/truncate.pipe';

@NgModule({
  declarations: [MainMenuComponent, AddCategoryComponent, AddDishComponent],
  providers: [DataBaseService],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(menuRoutes),
    StoreModule.forFeature('menu', menuReducer.menuReducer),
    EffectsModule.forFeature([menuEffects]),
    TruncatePipe,
  ],
})
export class MenuModule {}
