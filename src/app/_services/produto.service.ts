import { Produto } from "./../_models/Produto";
import { Constants } from "./../util/Constants";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class ProdutoService {
  baseURL = Constants.BASE_URL + "produtos";

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<Produto[]> {
    var retorno = this.http.get<Produto[]>(`${this.baseURL}`);

    return retorno;
  }

  buscarPorId(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseURL}/${id}`);
  }

  salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.baseURL}`, produto);
  }

  uploadImagem(produto: any): Observable<string> {
    return this.http.post<string>(`${this.baseURL}/UploadImagem`, produto);
  }

  alterar(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.baseURL}`, produto);
  }
  deletar(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/${id}`);
  }
}
