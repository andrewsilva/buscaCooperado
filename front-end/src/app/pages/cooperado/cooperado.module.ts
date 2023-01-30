import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsModule } from './../../components/cards/cards.module';
import { StepperModule } from './../../components/stepper/stepper.module';
import { FooterModule } from './../../components/template/footer/footer.module';
import { HeaderModule } from './../../components/template/header/header.module';
import { SharedModule } from './../../shared/shared.module';
import { CooperadoComponent } from './cooperado.component';



@NgModule({
  declarations: [CooperadoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    CardsModule,
    StepperModule,
    FooterModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [CooperadoComponent]
})
export class CooperadoModule { }
