import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {HeaderComponent} from './core/components/header/header.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {MaterialsModule} from './shared/materials.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavComponent} from './core/components/sidenav/sidenav.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {SearchBarService} from './shared/services/search-bar.service';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {AngularFireModule} from '@angular/fire/compat';
import { firebaseConfig } from 'src/environment/entironment';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, SidenavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: true}),
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  bootstrap: [AppComponent],
  providers: [SearchBarService],
})
export class AppModule {}
