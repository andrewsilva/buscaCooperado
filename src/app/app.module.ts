import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { AccountComponent } from './components/template/account/account.component';
import { NotificationsComponent } from './components/template/account/notifications/notifications.component';
import { ProfileComponent } from './components/template/account/profile/profile.component';
import { ButtonComponent } from './components/template/account/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountComponent,
    NotificationsComponent,
    ProfileComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
