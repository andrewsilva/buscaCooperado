import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { MascaraDirective } from './utils/directives/mask.directive';




@NgModule({
  declarations: [MascaraDirective],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    MascaraDirective
  ]
})
export class SharedModule { }
