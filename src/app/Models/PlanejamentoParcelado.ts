import { MesReferencia } from './MesReferencia';

export class PlanejamentoParcelado {
  id: string;
  valor: number;
  parcelaTotal: number;
  parcelaAtual: number;
  mesReferenciaId: string;
  planejamentoId: string;
  planejamentos: string;
  mesReferencia = new MesReferencia();
}
