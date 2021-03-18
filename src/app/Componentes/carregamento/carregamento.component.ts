import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-carregamento",
  templateUrl: "./carregamento.component.html",
  styleUrls: ["./carregamento.component.css"],
})
export class CarregamentoComponent implements OnInit {
  @Input() marginTop: number = 350;

  valorMarginTop: string;
  constructor() {}

  ngOnInit() {}
}
