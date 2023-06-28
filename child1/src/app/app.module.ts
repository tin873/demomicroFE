import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/micro-frontend1.reducer';
import { LibTestTinSpaModule } from 'lib-test-tin-spa';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LibTestTinSpaModule,
    StoreModule.forRoot({ app: appReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
