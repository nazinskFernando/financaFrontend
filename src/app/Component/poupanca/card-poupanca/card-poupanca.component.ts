import { Poupanca } from 'src/app/Models/Poupanca';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-poupanca',
  templateUrl: './card-poupanca.component.html',
  styleUrls: ['./card-poupanca.component.scss'],
})
export class CardPoupancaComponent implements OnInit {
  @Input() poupanca: Poupanca;
  constructor() {}

  ngOnInit() {}

  confirmarDelecao() {}

  atualizar() {}
}
