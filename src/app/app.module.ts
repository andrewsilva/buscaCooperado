import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CooperadoModule } from './pages/cooperado/cooperado.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './components/template/nav/nav.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NavModule,
    CooperadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
