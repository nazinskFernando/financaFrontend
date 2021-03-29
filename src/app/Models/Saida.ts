import { TipoOperacaoSaida } from './Enum/TipoOperacaoSaida.enum';

export class Saida {
  id: string;
  nome: string;
  valor: number;
  descricao: string;
  parcelas: string;
  isPago: boolean;
  isFixa: boolean;
  IsFixId: string;
  mesReferenciaId: string;
  poupancaId: string;
  entradaId: string;
  porcentagem: number;
  tipoOperacaoSaida: TipoOperacaoSaida;
}
