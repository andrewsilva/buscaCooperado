import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { ButtonModule } from './button/button.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ProfileModule } from './profile/profile.module';



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    ButtonModule,
    NotificationsModule,
    ProfileModule
  ],
  exports: [AccountComponent]
})
export class AccountModule { }
