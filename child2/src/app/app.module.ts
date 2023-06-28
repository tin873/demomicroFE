
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/micro-frontend1.reducer';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: appReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
