import { TipoOperacaoSaida } from './Enum/TipoOperacaoSaida.enum';
import { Transacao } from './Transacao';

export class Saida extends Transacao {
  tipoOperacaoSaida: TipoOperacaoSaida;
}
