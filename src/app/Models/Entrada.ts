import { TipoOperacaoEntrada } from './Enum/TipoOperacaoEntrada.enum';
import { Transacao } from './Transacao';

export class Entrada extends Transacao {
  tipoOperacaoEntrada: TipoOperacaoEntrada;
}
