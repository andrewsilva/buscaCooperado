export interface ICooperadoDataTeste {
  cpf: string;
  pessoa: ICooperado;
}
export interface ICooperado {
  nome: string;
  conta_corrente: string;
  conta_aplicacao: string;
  situacao: string;
}

export interface ICooperadoData {
  id: string,
  nome: string,
  situacao: string,
  numeroContaAplicacao: string,
  numeroContaCorrente: string
}
