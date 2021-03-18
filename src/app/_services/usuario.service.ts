import { RetornoLogin } from "./../_models/RetornoLogin";
import { Constants } from "./../util/Constants";
import { Usuario } from "./../_models/Usuario";
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpResponse,
} from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { ToastrService } from "ngx-toastr";
@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  baseURL = "https://dev.sitemercado.com.br/api/login";
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) {}

  login(valor: Usuario): Observable<RetornoLogin> {
    const headers = new HttpHeaders({
      Authorization: "Basic " + btoa(valor.username + ":" + valor.password),
    });

    return this.http
      .post<RetornoLogin>(`${this.baseURL}`, {}, { headers })
      .pipe(
        map((response: any) => {
          const user = response;
          return user;
        })
      );
    // return this.http.post(`${this.baseURL}aluno`, aluno);
  }

  logout() {
    localStorage.clear();
    Constants.mostrarMenu = false;
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }
}
