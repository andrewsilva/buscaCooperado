export interface ICooperadoData {
  cpf: string;
  pessoa: ICooperado;
}
export interface ICooperado {
  nome: string;
  conta_corrente: string;
  conta_aplicacao: string;
  situacao: string;
}
