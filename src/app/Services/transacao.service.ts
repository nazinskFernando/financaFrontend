import { TransacaoResumoMes } from './../Models/TransacaoResumoMes';
import { Entrada } from 'src/app/Models/Entrada';
import { Saida } from 'src/app/Models/Saida';
import { Transacao } from '../Models/Transacao';
import { Constants } from '../Util/Constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { TipoOperacao } from '../Models/Enum/TipoOperacao.enum';

@Injectable({
  providedIn: 'root',
})
export class TransacaoService {
  baseURL = Constants.BASE_URL + 'Transacoes';

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<Transacao[]> {
    var retorno = this.http.get<Transacao[]>(`${this.baseURL}`);
    return retorno;
  }

  buscarTransacoes(
    mesReferenciaId: string,
    tipoOperacao: TipoOperacao
  ): Observable<Transacao[]> {
    var retorno = this.http.get<Transacao[]>(
      `${this.baseURL}/${mesReferenciaId}/${tipoOperacao}`
    );
    return retorno;
  }
  buscarResumoMes(mesReferenciaId: string): Observable<TransacaoResumoMes> {
    var retorno = this.http.get<TransacaoResumoMes>(
      `${this.baseURL}/resumoMes/${mesReferenciaId}`
    );
    return retorno;
  }

  buscarPorId(id: string): Observable<Transacao> {
    return this.http.get<Transacao>(`${this.baseURL}/${id}`);
  }

  salvar(Transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(`${this.baseURL}`, Transacao);
  }

  cadastrarEntrada(entrada: Entrada): Observable<Entrada> {
    return this.http.post<Entrada>(`${this.baseURL}`, entrada);
  }

  cadastrarSaida(saida: Saida): Observable<Saida> {
    return this.http.post<Saida>(`${this.baseURL}`, saida);
  }

  alterar(Transacao: Transacao): Observable<Transacao> {
    return this.http.put<Transacao>(`${this.baseURL}`, Transacao);
  }
  deletar(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/${id}`);
  }
}
