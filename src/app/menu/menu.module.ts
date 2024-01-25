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
import {SearchBarService} from '../shared/services/search-bar.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainMenuComponent, AddCategoryComponent, AddDishComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialsModule,
    SharedModule,
    RouterModule.forChild(menuRoutes),
    StoreModule.forFeature('menu', menuReducer.menuReducer),
    EffectsModule.forFeature([menuEffects]),
    TruncatePipe,
  ],
  providers: [DataBaseService],
})
export class MenuModule {}
