import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entrada } from 'src/app/Models/Entrada';
import { MesReferencia } from 'src/app/Models/MesReferencia';
import { Saida } from 'src/app/Models/Saida';
import { EntradaService } from 'src/app/Services/entrada.service';
import { SaidaService } from 'src/app/Services/saida.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-saida',
  templateUrl: './list-saida.component.html',
  styleUrls: ['./list-saida.component.scss'],
})
export class ListSaidaComponent implements OnInit {
  @Input() mesReferenciaId: string;
  @Output() atualizou = new EventEmitter<boolean>();
  @Output() totalSaida = new EventEmitter<number>();
  saidas = new Array<Saida>();

  constructor(
    private saidaService: SaidaService,
    private entradaService: EntradaService
  ) {}

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
    this.saidaService.buscarPorMesReferencia(this.mesReferenciaId).subscribe(
      (saidas: Saida[]) => {
        this.saidas = saidas;
        var total = 0;
        this.saidas.forEach((e) => {
          total += e.valor;
        });

        this.totalSaida.emit(total);
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
