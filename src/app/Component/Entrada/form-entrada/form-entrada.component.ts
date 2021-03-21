import { Entrada } from './../../../Models/Entrada';
import { TransacaoService } from 'src/app/Services/transacao.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NgbModalConfig,
  NgbModal,
  NgbActiveModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { TipoOperacao } from 'src/app/Models/Enum/TipoOperacao.enum';

@Component({
  selector: 'app-form-entrada',
  templateUrl: './form-entrada.component.html',
  styleUrls: ['./form-entrada.component.scss'],
})
export class FormEntradaComponent implements OnInit {
  @Input() mesReferenciaId: string;
  @Output() salvou = new EventEmitter<boolean>();
  @Input() isEdicao: Entrada;
  formulario: FormGroup;
  modalReference: NgbModalRef;
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public fb: FormBuilder,
    private transacaoService: TransacaoService
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.validacao();
    if (this.isEdicao) {
      this.preencherCampo();
    }
  }

  preencherCampo() {
    this.formulario.controls['nome'].setValue(this.isEdicao.nome);
    this.formulario.controls['valor'].setValue(this.isEdicao.valor);
    this.formulario.controls['descricao'].setValue(this.isEdicao.descricao);
    this.formulario.controls['isFixa'].setValue(this.isEdicao.isFixa);
    this.formulario.controls['isPago'].setValue(this.isEdicao.isPago);
    this.formulario.controls['parcelas'].setValue(this.isEdicao.parcelas);
  }

  open(content) {
    this.modalReference = this.modalService.open(content);
  }

  validacao() {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      descricao: [''],
      parcelas: [0],
      isPago: [false],
      isFixa: [false],
    });
  }

  preemcherForm(): Entrada {
    var entrada = new Entrada();
    entrada.nome = this.formulario.controls['nome'].value;
    entrada.valor = this.formulario.controls['valor'].value;
    entrada.descricao = this.formulario.controls['descricao'].value;
    entrada.isFixa = this.formulario.controls['isFixa'].value;
    entrada.isPago = this.formulario.controls['isPago'].value;
    entrada.parcelas = this.formulario.controls['parcelas'].value
      ? this.formulario.controls['parcelas'].value
      : 0;
    entrada.tipoOperacao = TipoOperacao.Entrada;
    entrada.mesReferenciaId = this.mesReferenciaId;
    if (this.isEdicao) {
      entrada.id = this.isEdicao.id;
    }
    return entrada;
  }

  editar() {
    this.transacaoService.alterar(this.preemcherForm()).subscribe(
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
      this.transacaoService.salvar(this.preemcherForm()).subscribe(
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
