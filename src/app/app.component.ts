import { Constants } from "src/app/util/Constants";
import { Usuario } from "./_models/Usuario";
import { UsuarioService } from "./_services/usuario.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private usuarioService: UsuarioService, public router: Router) {}
  ngOnInit() {}
}
