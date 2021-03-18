import { Component, Input, OnInit } from '@angular/core';
import { Saida } from 'src/app/Models/Saida';

@Component({
  selector: 'app-card-saida',
  templateUrl: './card-saida.component.html',
  styleUrls: ['./card-saida.component.scss'],
})
export class CardSaidaComponent implements OnInit {
  @Input() saida: Saida;
  constructor() {}

  ngOnInit() {}
}
