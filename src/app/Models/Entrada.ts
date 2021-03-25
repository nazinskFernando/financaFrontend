import { TipoOperacaoEntrada } from './Enum/TipoOperacaoEntrada.enum';

export class Entrada {
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
  tipoOperacaoEntrada: TipoOperacaoEntrada;
}
