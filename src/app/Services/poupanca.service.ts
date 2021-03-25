import { Poupanca } from 'src/app/Models/Poupanca';
import { Constants } from '../Util/Constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class PoupancaService {
  baseURL = Constants.BASE_URL + 'Poupancas';

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<Poupanca[]> {
    var retorno = this.http.get<Poupanca[]>(`${this.baseURL}`);
    return retorno;
  }

  buscarPorId(id: string): Observable<Poupanca> {
    return this.http.get<Poupanca>(`${this.baseURL}/${id}`);
  }

  salvar(Poupanca: Poupanca): Observable<Poupanca> {
    return this.http.post<Poupanca>(`${this.baseURL}`, Poupanca);
  }

  alterar(Poupanca: Poupanca): Observable<Poupanca> {
    return this.http.put<Poupanca>(`${this.baseURL}`, Poupanca);
  }
  deletar(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/${id}`);
  }
}
