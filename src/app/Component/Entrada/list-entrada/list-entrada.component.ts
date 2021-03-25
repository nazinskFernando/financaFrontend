import { EntradaService } from './../../../Services/entrada.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Entrada } from 'src/app/Models/Entrada';
import { MesReferencia } from 'src/app/Models/MesReferencia';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-entrada',
  templateUrl: './list-entrada.component.html',
  styleUrls: ['./list-entrada.component.scss'],
})
export class ListEntradaComponent implements OnInit, OnChanges {
  @Input() mesReferenciaId: string;
  @Output() atualizou = new EventEmitter<boolean>();
  @Output() totalEntrada = new EventEmitter<number>();
  entradas = new Array<Entrada>();

  constructor(private entradaService: EntradaService) {}

  ngOnInit() {}
  ngOnChanges() {
    console.log('mese', this.mesReferenciaId);
    this.buscarEntrada();
  }

  atualizar() {
    this.buscarEntrada();
    this.atualizou.emit(true);
  }

  buscarEntrada() {
    console.log('entrou', this.mesReferenciaId);
    this.entradaService.buscarPorMesReferencia(this.mesReferenciaId).subscribe(
      (entradas: Entrada[]) => {
        this.entradas = entradas;
        var total = 0;
        this.entradas.forEach((e) => {
          total += e.valor;
        });
        this.totalEntrada.emit(total);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error,
        });
      }
    );
  }
}
