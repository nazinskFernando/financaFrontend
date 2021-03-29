import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entrada } from 'src/app/Models/Entrada';
import { TipoOperacaoSaida } from 'src/app/Models/Enum/TipoOperacaoSaida.enum';
import { Saida } from 'src/app/Models/Saida';
import { EntradaService } from 'src/app/Services/entrada.service';
import { SaidaService } from 'src/app/Services/saida.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-saida',
  templateUrl: './card-saida.component.html',
  styleUrls: ['./card-saida.component.scss'],
})
export class CardSaidaComponent implements OnInit {
  @Input() saida: Saida;
  @Output() atualizou = new EventEmitter<boolean>();
  constructor(
    private saidaService: SaidaService,
    private entradaService: EntradaService
  ) {}

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
    this.saidaService.deletar(this.saida.id).subscribe(
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
