import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule, authRoutes } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MaterialsModule } from '../shared/materials.module';
import { AuthService } from './services/auth.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as authEffects from './store/effects'
import * as authReducer from './store/reducers'
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    RouterModule.forChild(authRoutes),
    MaterialsModule,
    StoreModule.forFeature('auth', authReducer.authReducer),
    EffectsModule.forFeature([authEffects]),
  ],
  providers :[
    AuthService
  ]
})
export class AuthModule { }
