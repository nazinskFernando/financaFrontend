import { Saida } from 'src/app/Models/Saida';
import { Constants } from '../Util/Constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class SaidaService {
  baseURL = Constants.BASE_URL + 'Saidas';

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<Saida[]> {
    var retorno = this.http.get<Saida[]>(`${this.baseURL}`);
    return retorno;
  }

  buscarPorId(id: string): Observable<Saida> {
    return this.http.get<Saida>(`${this.baseURL}/${id}`);
  }

  buscarPorMesReferencia(mesReferenciaId: string): Observable<Saida[]> {
    return this.http.get<Saida[]>(
      `${this.baseURL}/mesReferenciaId/${mesReferenciaId}`
    );
  }

  salvar(saida: Saida): Observable<Saida> {
    console.log('valor na saida', saida);
    return this.http.post<Saida>(`${this.baseURL}`, saida);
  }

  alterar(Saida: Saida): Observable<Saida> {
    return this.http.put<Saida>(`${this.baseURL}`, Saida);
  }
  deletar(id: string, deleteAll: boolean = false): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/${id}/${deleteAll}`);
  }
}
