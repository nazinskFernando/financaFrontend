import { RetornoLogin } from "./../../../_models/RetornoLogin";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Constants } from "src/app/util/Constants";
import { Usuario } from "src/app/_models/Usuario";
import { UsuarioService } from "src/app/_services/usuario.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // @ViewChild("submitMoodle", { static: false }) submitMoodle: ElementRef;

  titulo = "Login";
  loginModel = new Usuario();
  mostrar: boolean = false;
  loginForm: FormGroup;
  dataTeste: Date;
  carregamento: boolean = false;
  mostrarEsqueciSenha: boolean = false;
  tipoAcesso: string;
  acessoAdm: boolean = false;

  constructor(
    private authService: UsuarioService,
    public router: Router,
    private rota: ActivatedRoute,
    public fb: FormBuilder,
    public activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      login: ["", [Validators.required, Validators.maxLength(50)]],
      senha: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    // this.router.navigate(["/produtos"]);
    // if (localStorage.getItem("token") != null) {
    //   this.router.navigate(["/produtos"]);
    // }
  }

  mostrarSenha() {
    this.mostrar = !this.mostrar;
  }

  login() {
    this.carregamento = true;
    this.loginModel.username = this.loginForm.controls["login"].value;
    this.loginModel.password = this.loginForm.controls["senha"].value;
    // this.router.navigate(["/produtos"]);
    // window.location.href = "http://login-ead.recode.org.br/";
    this.authService.login(this.loginModel).subscribe(
      (autenticado: RetornoLogin) => {
        if (!autenticado.success) {
          this.toastr.error(autenticado.error);
        } else {
          this.toastr.success("Autenticado com sucesso!");
          this.router.navigate(["/produtos"]);
        }
        this.carregamento = false;
      },
      (error: any) => {
        this.carregamento = false;
        this.toastr.error("Banco de dados falhou");
      }
    );
  }
}
