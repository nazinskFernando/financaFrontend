import { TipoOperacaoSaida } from './Enum/TipoOperacaoSaida.enum';

export class Saida {
  id: string;
  nome: string;
  valor: number;
  descricao: string;
  parcelas: number;
  isPago: boolean;
  isFixa: boolean;
  IsFixId: string;
  mesReferenciaId: string;
  poupancaId: string;
  tipoOperacaoSaida: TipoOperacaoSaida;
}
