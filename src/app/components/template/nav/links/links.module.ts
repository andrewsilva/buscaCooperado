import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LinksComponent } from './links.component';



@NgModule({
  declarations: [LinksComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [LinksComponent]
})
export class LinksModule { }
