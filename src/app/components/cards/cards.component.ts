import { Component, Input } from '@angular/core';
import { ICooperadoData } from './../../pages/cooperado/icooperado.interface';
import { ICard } from './card/card.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() cardData?: ICooperadoData | void;

  list!: Array<ICard>;

  constructor() {}

  ngOnChanges(): void {
    this.list = [
      {
        titulo: 'Situação cadastral do CPF',
        subtitulo: 'Cooperativa Alios',
        categoria1: 'Nome',
        content1: this.cardData!.pessoa!.nome,
        categoria2: 'Situação do CPF',
        content2: this.cardData!.pessoa!.situacao,
        type: 'person',
      },
      {
        titulo: 'Conta Aplicação',
        subtitulo: 'Cooperativa Alios',
        categoria1: 'Número da conta',
        content1: this.cardData!.pessoa!.conta_aplicacao,
        command: 'Duplicar Conta',
        type: 'credit_card',
      },
      {
        titulo: 'Conta Aplicação',
        subtitulo: 'Cooperativa Alios',
        categoria1: 'Número da conta',
        content1: this.cardData!.pessoa!.conta_corrente,
        command: 'Duplicar Conta',
        type: 'credit_card',
      },
    ];
  }
}
