import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CooperadoService } from './../../services/cooperado.service';
import { CpfValidator } from './../../shared/utils/validators/cpf.validator';
import { ICooperadoData } from './icooperado.interface';

@Component({
  selector: 'app-cooperado',
  templateUrl: './cooperado.component.html',
  styleUrls: ['./cooperado.component.css'],
  providers: [CooperadoService]

})
export class CooperadoComponent {
  form: FormGroup;
  numCpf: number = 0;

  // public _retornoConsulta: ICooperadoData = {cpf: '', pessoa: {conta_aplicacao: '', conta_corrente: '', nome: '', situacao: ''}};
  public _retornoConsulta: ICooperadoData = {id: '', nome: '', numeroContaAplicacao: '', numeroContaCorrente: '', situacao: '' }
  public _exibirConsulta: boolean = false;
  public _naoEncontrou: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cooperadoService: CooperadoService,
    private snackBar: MatSnackBar
  ) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    console.log("nginit")
    this.gerarForm();
  }

  gerarForm() {
    console.log("gerarform")
    this.form = this.fb.group({
      cpf: ['', [Validators.required, CpfValidator]],
    });
  }

  public buscarCpf(): void {
    console.log(1)
    if (this.form.invalid) {
      console.log(2)
      this._exibirConsulta = false;
      this.snackBar.open('CPF Invalido ou não encontrado :(', 'Fechar', {
        duration: 3000
      });
      return;
    }

    this.numCpf = this.form.get('cpf')!.value;
    this.cooperadoService.getById(this.numCpf).subscribe((res =>{
      this._exibirConsulta = true;
      this._retornoConsulta = res;
      console.log("retorno consulta", this._retornoConsulta)
    }), error =>{
      this._exibirConsulta = false;
      this.snackBar.open('CPF Invalido ou não encontrado :(', 'Fechar', {
        duration: 3000
      });
      }
    );
  }

  clearForm(){
    this._exibirConsulta = false;
  }
  // @Input() cpfInputValue: string = '';

  // error: Boolean = false;
  // errorMsg: string = '';
  validCpf: Boolean = false;
  // cooperadoSelecionado?: ICooperadoData | void;
  // cpfPesquisado!: String;
  // cpfValidate!: [boolean, string];



  // changeHandler() {
  //   // this.cpfInputValue = mask['cpf'](this.cpfInputValue);
  // }

  // handleError() {
  //   this.error = false;
  // }

  // clickHandler() {
  //   // const formatedCpf = FormatCpf(this.cpfInputValue);
  //   // this.cooperadoSelecionado = handleValidationCPF(dataJson, formatedCpf);
  //   // this.cpfValidate = handleCPFValidation(
  //   //   formatedCpf,
  //   //   this.cooperadoSelecionado
  //   // );

  //   this.error = this.cpfValidate[0];
  //   this.errorMsg = this.cpfValidate[1];

  //   if (this.error) {
  //     return (this.validCpf = false);
  //   }

  //   return (this.validCpf = true);
  // }
}
