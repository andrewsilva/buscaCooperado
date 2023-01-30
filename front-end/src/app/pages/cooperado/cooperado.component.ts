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
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      cpf: ['', [Validators.required, CpfValidator]],
    });
  }

  public buscarCpf(): void {
    if (this.form.invalid) {
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

}
