import { Transacao } from './../../Models/Enum/transacao.enum';
import { Component, OnInit } from '@angular/core';
import Bootstrap from 'bootstrap/dist/js/bootstrap';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  tipoTransacao: Transacao;

  constructor() {}

  ngOnInit() {}

  defineTipo(tipo) {
    this.tipoTransacao = tipo;
  }
}
