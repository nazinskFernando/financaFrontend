import { Constants } from "src/app/util/Constants";
import { ProdutoService } from "./../../../_services/produto.service";
import { EventEmitter, Input, Output } from "@angular/core";
import { Produto } from "./../../../_models/Produto";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-card-produto",
  templateUrl: "./card-produto.component.html",
  styleUrls: ["./card-produto.component.scss"],
})
export class CardProdutoComponent implements OnInit {
  @Input() produto: Produto;
  @Output() atualizar = new EventEmitter<boolean>();

  constructor(
    private produtoService: ProdutoService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.produto.imagem = Constants.BASE_URL_IMAGEM + this.produto.imagem;
  }

  remover() {
    this.produtoService.deletar(this.produto.id).subscribe(
      (removido: boolean) => {
        this.toast.success("Item removido!");
        this.atualizar.emit(true);
      },
      (error) => {
        this.toast.error("Erro remover produto", error.error);
      }
    );
  }
}
