import { TransacaoService } from './../../../Services/transacao.service';
import { Entrada } from 'src/app/Models/Entrada';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-entrada',
  templateUrl: './card-entrada.component.html',
  styleUrls: ['./card-entrada.component.scss'],
})
export class CardEntradaComponent implements OnInit {
  @Input() entrada: Entrada;
  @Output() atualizou = new EventEmitter<boolean>();
  constructor(private transacaoService: TransacaoService) {}

  ngOnInit() {}

  confirmarDelecao() {
    Swal.fire({
      title: 'Tem certeza que deseja cancelar?',
      showDenyButton: true,
      confirmButtonText: `Sim`,
      denyButtonText: `Não`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.apagar();
      }
    });
  }

  atualizar() {
    this.atualizou.emit(true);
  }

  apagar() {
    this.transacaoService.deletar(this.entrada.id).subscribe(
      () => {
        this.atualizou.emit(true);
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
