import { Entrada } from 'src/app/Models/Entrada';
import { Saida } from './Saida';
export class Poupanca {
  id: string;
  nome: string;

  transacoesEntrada = new Array<Entrada>();
  transacoesSaida = new Array<Saida>();
}
