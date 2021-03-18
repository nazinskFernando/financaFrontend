import { Entrada } from 'src/app/Models/Entrada';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-entrada',
  templateUrl: './card-entrada.component.html',
  styleUrls: ['./card-entrada.component.scss'],
})
export class CardEntradaComponent implements OnInit {
  @Input() entrada: Entrada;
  constructor() {}

  ngOnInit() {}
}
