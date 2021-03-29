import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NgbModalConfig,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { Entrada } from 'src/app/Models/Entrada';
import { Saida } from 'src/app/Models/Saida';
import { EntradaService } from 'src/app/Services/entrada.service';
import { SaidaService } from 'src/app/Services/saida.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-saida',
  templateUrl: './form-saida.component.html',
  styleUrls: ['./form-saida.component.scss'],
})
export class FormSaidaComponent implements OnInit {
  @Input() mesReferenciaId: string;
  @Input() isEdicao: Saida;
  @Output() salvou = new EventEmitter<boolean>();
  formulario: FormGroup;
  modalReference: NgbModalRef;
  entradas = new Array<Entrada>();
  mostrarEntradas: boolean = false;
  desabilitarValor: boolean = true;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public fb: FormBuilder,
    private saidaService: SaidaService,
    private entradaService: EntradaService
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.validacao();
    this.buscarEntradas();
    if (this.isEdicao) {
      this.preencherCampo();
      console.log('entradas', this.isEdicao);
    }
  }

  preencherCampo() {
    this.formulario.controls['nome'].setValue(this.isEdicao.nome);
    this.formulario.controls['valor'].setValue(this.isEdicao.valor);
    this.formulario.controls['descricao'].setValue(this.isEdicao.descricao);
    this.formulario.controls['isFixa'].setValue(this.isEdicao.isFixa);
    this.formulario.controls['isPago'].setValue(this.isEdicao.isPago);
    this.formulario.controls['parcelas'].setValue(this.isEdicao.parcelas);
    this.formulario.controls['entradaId'].setValue(this.isEdicao.entradaId);
    this.formulario.controls['porcentagem'].setValue(this.isEdicao.porcentagem);

    this.formulario.controls['tipoOperacaoSaida'].setValue(
      this.isEdicao.tipoOperacaoSaida.toString()
    );

    if (this.formulario.controls['entradaId'].value != null) {
      this.mostrarEntradas = true;
    }
  }

  open(content) {
    this.modalReference = this.modalService.open(content);
  }

  selecionarTipoOperacao() {
    if (this.formulario.controls['tipoOperacaoSaida'].value == 1) {
      this.mostrarEntradas = true;
      this.formulario.controls['valor'].disable();
    } else {
      this.formulario.controls['valor'].enable();
      this.mostrarEntradas = false;
    }
  }

  calcularPorcentagem() {
    this.entradaService
      .buscarPorId(this.formulario.controls['entradaId'].value)
      .subscribe(
        (entrada: Entrada) => {
          this.formulario.controls['valor'].setValue(
            entrada.valor *
              (this.formulario.controls['porcentagem'].value / 100)
          );
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

  validacao() {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      descricao: [''],
      tipoOperacaoSaida: ['2'],
      entradaId: [''],
      porcentagem: [''],
      parcelas: [0],
      isPago: [false],
      isFixa: [false],
    });
  }

  preemcherForm(): Saida {
    var saida = new Saida();
    saida.nome = this.formulario.controls['nome'].value;
    saida.valor = this.formulario.controls['valor'].value;
    saida.descricao = this.formulario.controls['descricao'].value;
    saida.isFixa = this.formulario.controls['isFixa'].value;
    saida.isPago = this.formulario.controls['isPago'].value;
    saida.entradaId = this.formulario.controls['entradaId'].value;
    saida.porcentagem = Number(this.formulario.controls['porcentagem'].value);
    saida.tipoOperacaoSaida = Number(
      this.formulario.controls['tipoOperacaoSaida'].value
    );
    saida.parcelas = this.formulario.controls['parcelas'].value
      ? this.formulario.controls['parcelas'].value
      : 0;
    saida.mesReferenciaId = this.mesReferenciaId;
    if (this.isEdicao) {
      saida.id = this.isEdicao.id;
    }

    return saida;
  }

  buscarEntradas() {
    this.entradaService.buscarPorMesReferencia(this.mesReferenciaId).subscribe(
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

  editar() {
    this.saidaService.alterar(this.preemcherForm()).subscribe(
      () => {
        this.salvou.emit(true);
        this.modalReference.close();
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
  salvar() {
    if (this.isEdicao) {
      this.editar();
    } else {
      console.log('saida', this.preemcherForm());

      this.saidaService.salvar(this.preemcherForm()).subscribe(
        () => {
          this.salvou.emit(true);
          this.modalReference.close();
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
}
