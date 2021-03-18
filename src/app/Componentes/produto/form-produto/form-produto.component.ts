import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProdutoService } from "./../../../_services/produto.service";
import { Component, OnInit } from "@angular/core";
import { Produto } from "src/app/_models/Produto";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { Constants } from "src/app/util/Constants";

@Component({
  selector: "app-form-produto",
  templateUrl: "./form-produto.component.html",
  styleUrls: ["./form-produto.component.scss"],
})
export class FormProdutoComponent implements OnInit {
  formulario: FormGroup;
  produto = new Produto();
  produtoId: string;
  file: any;

  constructor(
    private produtoService: ProdutoService,
    public fb: FormBuilder,
    private router: Router,
    public rota: ActivatedRoute,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.validation();
    this.produtoId = this.rota.snapshot.paramMap.get("id");
    if (this.produtoId) {
      this.buscarPorId();
    }
  }

  buscarPorId() {
    this.produtoService.buscarPorId(this.produtoId).subscribe(
      (produto: Produto) => {
        this.produto = produto;
        this.produto.imagem = Constants.BASE_URL_IMAGEM + this.produto.imagem;
        this.preencher();
      },
      (error) => {
        this.toast.error("Erro ao buscar produto", error.error);
      }
    );
  }

  preencher() {
    this.formulario.controls["nome"].setValue(this.produto.nome);
    this.formulario.controls["valor"].setValue(this.produto.valor);
    this.formulario.controls["imagem"].setValue(this.produto.imagem);
  }

  validation() {
    this.formulario = this.fb.group({
      imagem: ["", [Validators.required]],
      nome: ["", [Validators.required]],
      valor: ["", [Validators.required]],
    });
  }

  salvar(imagem: string) {
    this.produto.imagem = imagem;
    this.produto.nome = this.formulario.controls["nome"].value;
    this.produto.valor = this.formulario.controls["valor"].value;

    this.produtoService.salvar(this.produto).subscribe(
      (produto: Produto) => {
        this.router.navigate(["/produtos"]);
      },
      (error) => {
        this.toast.error("Erro salvar produto", error.error);
      }
    );
  }

  alterar(imagem: string) {
    this.produto.imagem = imagem;
    this.produto.nome = this.formulario.controls["nome"].value;
    this.produto.valor = this.formulario.controls["valor"].value;

    this.produtoService.alterar(this.produto).subscribe(
      (produto: Produto) => {
        this.router.navigate(["/produtos"]);
      },
      (error) => {
        this.toast.error("Erro ao editar produto", error.error);
      }
    );
  }

  definirFile(event: any) {
    this.file = event.target.files[0];
  }

  submit(): void {
    const formData = new FormData();
    formData.append("files", this.file, this.file.name);
    this.produtoService.uploadImagem(formData).subscribe(
      () => {
        if (this.produtoId) {
          this.alterar(this.file.name);
        } else {
          this.salvar(this.file.name);
        }
      },
      (error) => {
        this.toast.error("Erro ao salvar imagem", error.error);
      }
    );
  }
  //http://localhost:5000/uploads/image4.png
}
