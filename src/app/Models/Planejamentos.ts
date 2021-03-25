export class Planejamentos {
  id: string;
  nome: string;
  valor: number;
  parcelas: number;
  descricao: string;

  planejamentoParcelados = new Array<Planejamentos>();
}
