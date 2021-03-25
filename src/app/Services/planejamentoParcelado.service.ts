import { PlanejamentoParcelado } from 'src/app/Models/PlanejamentoParcelado';
import { Constants } from '../Util/Constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class PlanejamentoParceladoService {
  baseURL = Constants.BASE_URL + 'PlanejamentoParcelados';

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<PlanejamentoParcelado[]> {
    var retorno = this.http.get<PlanejamentoParcelado[]>(`${this.baseURL}`);
    return retorno;
  }

  buscarPorId(id: string): Observable<PlanejamentoParcelado> {
    return this.http.get<PlanejamentoParcelado>(`${this.baseURL}/${id}`);
  }

  salvar(
    PlanejamentoParcelado: PlanejamentoParcelado
  ): Observable<PlanejamentoParcelado> {
    return this.http.post<PlanejamentoParcelado>(
      `${this.baseURL}`,
      PlanejamentoParcelado
    );
  }

  alterar(
    PlanejamentoParcelado: PlanejamentoParcelado
  ): Observable<PlanejamentoParcelado> {
    return this.http.put<PlanejamentoParcelado>(
      `${this.baseURL}`,
      PlanejamentoParcelado
    );
  }
  deletar(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/${id}`);
  }
}
