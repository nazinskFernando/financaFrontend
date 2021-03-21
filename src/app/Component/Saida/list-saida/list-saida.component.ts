import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoOperacao } from 'src/app/Models/Enum/TipoOperacao.enum';
import { MesReferencia } from 'src/app/Models/MesReferencia';
import { Saida } from 'src/app/Models/Saida';
import { TransacaoService } from 'src/app/Services/transacao.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-saida',
  templateUrl: './list-saida.component.html',
  styleUrls: ['./list-saida.component.scss'],
})
export class ListSaidaComponent implements OnInit {
  @Input() mesReferenciaId: string;
  @Output() atualizou = new EventEmitter<boolean>();
  saidas = new Array<Saida>();

  constructor(private transacaoService: TransacaoService) {}

  ngOnInit() {}
  ngOnChanges() {
    this.mesReferenciaId;
    this.buscarSaida();
  }

  atualizar() {
    this.atualizou.emit(true);
    this.buscarSaida();
  }

  buscarSaida() {
    console.log('this.mesReferenciaId saida', this.mesReferenciaId);
    this.transacaoService
      .buscarTransacoes(this.mesReferenciaId, TipoOperacao.Saida)
      .subscribe(
        (saidas: Saida[]) => {
          this.saidas = saidas;
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
