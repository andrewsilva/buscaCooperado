import { Component, Input } from '@angular/core';
import { ICooperadoData } from './icooperado.interface';

@Component({
  selector: 'app-cooperado',
  templateUrl: './cooperado.component.html',
  styleUrls: ['./cooperado.component.css']
})
export class CooperadoComponent {
  @Input() cpfInputValue: string = '';

  error: Boolean = false;
  errorMsg: string = '';
  validCpf: Boolean = false;
  cooperadoSelecionado?: ICooperadoData | void;
  cpfPesquisado!: String;
  cpfValidate!: [boolean, string];

  changeHandler() {
    // this.cpfInputValue = mask['cpf'](this.cpfInputValue);
  }

  handleError() {
    this.error = false;
  }

  clickHandler() {
    // const formatedCpf = FormatCpf(this.cpfInputValue);
    // this.cooperadoSelecionado = handleValidationCPF(dataJson, formatedCpf);
    // this.cpfValidate = handleCPFValidation(
    //   formatedCpf,
    //   this.cooperadoSelecionado
    // );

    this.error = this.cpfValidate[0];
    this.errorMsg = this.cpfValidate[1];

    if (this.error) {
      return (this.validCpf = false);
    }

    return (this.validCpf = true);
  }
}
