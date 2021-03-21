import { TipoOperacao } from './Enum/TipoOperacao.enum';
export class Transacao {
  id: string;
  nome: string;
  valor: number;
  descricao: string;
  parcelas: number;
  isPago: boolean;
  isFixa: boolean;
  IsFixId: string;
  tipoOperacao: TipoOperacao;
  mesReferenciaId: string;
}
