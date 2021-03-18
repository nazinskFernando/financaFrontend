import { Component, OnInit } from '@angular/core';
import { Saida } from 'src/app/Models/Saida';

@Component({
  selector: 'app-list-saida',
  templateUrl: './list-saida.component.html',
  styleUrls: ['./list-saida.component.scss'],
})
export class ListSaidaComponent implements OnInit {
  saidas = new Array<Saida>();

  constructor() {}

  ngOnInit() {}
}
