import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../../shared/shared.module';
import { ProfileModule } from './../account/profile/profile.module';
import { LinksModule } from './links/links.module';
import { NavComponent } from './nav.component';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    LinksModule,
    ProfileModule,
    SharedModule
  ],
  exports: [NavComponent]
})
export class NavModule { }
