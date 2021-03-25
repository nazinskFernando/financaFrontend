import { Planejamentos } from 'src/app/Models/Planejamentos';
import { Constants } from '../Util/Constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class PlanejamentosService {
  baseURL = Constants.BASE_URL + 'Planejamentoss';

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<Planejamentos[]> {
    var retorno = this.http.get<Planejamentos[]>(`${this.baseURL}`);
    return retorno;
  }

  buscarPorId(id: string): Observable<Planejamentos> {
    return this.http.get<Planejamentos>(`${this.baseURL}/${id}`);
  }

  salvar(Planejamentos: Planejamentos): Observable<Planejamentos> {
    return this.http.post<Planejamentos>(`${this.baseURL}`, Planejamentos);
  }

  alterar(Planejamentos: Planejamentos): Observable<Planejamentos> {
    return this.http.put<Planejamentos>(`${this.baseURL}`, Planejamentos);
  }
  deletar(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/${id}`);
  }
}
