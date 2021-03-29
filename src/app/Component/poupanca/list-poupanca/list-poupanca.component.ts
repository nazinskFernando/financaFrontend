import { Poupanca } from 'src/app/Models/Poupanca';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-poupanca',
  templateUrl: './list-poupanca.component.html',
  styleUrls: ['./list-poupanca.component.scss'],
})
export class ListPoupancaComponent implements OnInit {
  @Input() poupancas: Poupanca[];
  constructor() {}

  ngOnInit() {}
}
