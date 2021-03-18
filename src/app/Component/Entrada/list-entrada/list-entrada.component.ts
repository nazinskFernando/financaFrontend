import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from 'src/app/Models/Entrada';

@Component({
  selector: 'app-list-entrada',
  templateUrl: './list-entrada.component.html',
  styleUrls: ['./list-entrada.component.scss'],
})
export class ListEntradaComponent implements OnInit {
  entradas = new Array<Entrada>();

  constructor() {}

  ngOnInit() {}
}
