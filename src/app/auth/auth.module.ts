import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule, authRoutes } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MaterialsModule } from '../shared/materials.module';



@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MaterialsModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
