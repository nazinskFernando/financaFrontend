import { TransacaoService } from './../../../Services/transacao.service';
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
import { TipoOperacao } from 'src/app/Models/Enum/TipoOperacao.enum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-entrada',
  templateUrl: './list-entrada.component.html',
  styleUrls: ['./list-entrada.component.scss'],
})
export class ListEntradaComponent implements OnInit, OnChanges {
  @Input() mesReferenciaId: string;
  @Output() atualizou = new EventEmitter<boolean>();
  entradas = new Array<Entrada>();

  constructor(private transacaoService: TransacaoService) {}

  ngOnInit() {}
  ngOnChanges() {
    this.mesReferenciaId;
    this.buscarEntrada();
  }

  atualizar() {
    this.buscarEntrada();
    this.atualizou.emit(true);
  }

  buscarEntrada() {
    console.log('entrou', this.mesReferenciaId);
    this.transacaoService
      .buscarTransacoes(this.mesReferenciaId, TipoOperacao.Entrada)
      .subscribe(
        (entradas: Entrada[]) => {
          this.entradas = entradas;
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
