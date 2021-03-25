import { Entrada } from 'src/app/Models/Entrada';
import { Saida } from 'src/app/Models/Saida';
import { MesReferencia } from '../Models/MesReferencia';
import { Constants } from '../Util/Constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class MesReferenciaService {
  baseURL = Constants.BASE_URL + 'MesesReferencia';

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<MesReferencia[]> {
    var retorno = this.http.get<MesReferencia[]>(`${this.baseURL}`);
    return retorno;
  }
}
