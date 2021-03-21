import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Saida } from 'src/app/Models/Saida';
import { TransacaoService } from 'src/app/Services/transacao.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-saida',
  templateUrl: './card-saida.component.html',
  styleUrls: ['./card-saida.component.scss'],
})
export class CardSaidaComponent implements OnInit {
  @Input() saida: Saida;
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
    this.transacaoService.deletar(this.saida.id).subscribe(
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
