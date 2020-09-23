import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { en_US, NgZorroAntdModule, NZ_I18N } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { ROUTES, RoutingModule } from './routing/routing.module';
import { LayoutModule } from './layout/layout.module';
import { UIModule } from './ui/ui.module';
import { PagesModule } from './pages/pages.module';
import { pageDataReducer } from './store/reducers/page-data.reducer';
import { appSettingsReducer } from './store/reducers/app-settings.reducer';
import { patientsReducer } from './store/reducers/patients.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({
      pageData: pageDataReducer,
      appSettings: appSettingsReducer,
      patients: patientsReducer
    }),
    NgZorroAntdModule,

    RoutingModule,
    LayoutModule,
    UIModule,
    PagesModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

declare module '@angular/core' {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}

