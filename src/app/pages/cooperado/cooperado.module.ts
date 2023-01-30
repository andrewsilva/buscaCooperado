import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardsModule } from './../../components/cards/cards.module';
import { StepperModule } from './../../components/stepper/stepper.module';
import { FooterModule } from './../../components/template/footer/footer.module';
import { HeaderModule } from './../../components/template/header/header.module';
import { CooperadoComponent } from './cooperado.component';



@NgModule({
  declarations: [CooperadoComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    CardsModule,
    StepperModule,
    FooterModule
  ],
  exports: [CooperadoComponent]
})
export class CooperadoModule { }
