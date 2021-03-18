import { ToastrService } from "ngx-toastr";
import { Produto } from "./../../../_models/Produto";
import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "src/app/_services/produto.service";

@Component({
  selector: "app-list-produto",
  templateUrl: "./list-produto.component.html",
  styleUrls: ["./list-produto.component.scss"],
})
export class ListProdutoComponent implements OnInit {
  produtos = new Array<Produto>();
  vazio: boolean = false;
  mostrarConteudo: boolean = false;

  constructor(
    private produtoService: ProdutoService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.produtoService.buscarTodos().subscribe(
      (produtos: Produto[]) => {
        this.produtos = produtos;
        this.mostrarConteudo = true;
        // this.produtos.length == 0 ? (this.vazio = true) : "";
      },
      (error) => {
        console.log("(error)", error);
        this.toast.error("Falha ao buscar produtos", error.error);
      }
    );
  }
}
