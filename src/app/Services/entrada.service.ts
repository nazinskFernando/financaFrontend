import { Entrada } from 'src/app/Models/Entrada';
import { Saida } from 'src/app/Models/Saida';
import { Constants } from '../Util/Constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class EntradaService {
  baseURL = Constants.BASE_URL + 'Entradas';

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<Entrada[]> {
    var retorno = this.http.get<Entrada[]>(`${this.baseURL}`);
    return retorno;
  }

  buscarPorId(id: string): Observable<Entrada> {
    return this.http.get<Entrada>(`${this.baseURL}/${id}`);
  }

  buscarPorMesReferencia(mesReferenciaId: string): Observable<Entrada[]> {
    return this.http.get<Entrada[]>(
      `${this.baseURL}/mesReferenciaId/${mesReferenciaId}`
    );
  }

  salvar(Entrada: Entrada): Observable<Entrada> {
    return this.http.post<Entrada>(`${this.baseURL}`, Entrada);
  }

  alterar(Entrada: Entrada): Observable<Entrada> {
    return this.http.put<Entrada>(`${this.baseURL}`, Entrada);
  }
  deletar(id: string, deleteAll: boolean = false): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/${id}/${deleteAll}`);
  }
}
