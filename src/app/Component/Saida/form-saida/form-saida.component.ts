import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NgbModalConfig,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { TipoOperacao } from 'src/app/Models/Enum/TipoOperacao.enum';
import { Saida } from 'src/app/Models/Saida';
import Swal from 'sweetalert2';
import { TransacaoService } from 'src/app/Services/transacao.service';

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

  preemcherForm(): Saida {
    var saida = new Saida();
    saida.nome = this.formulario.controls['nome'].value;
    saida.valor = this.formulario.controls['valor'].value;
    saida.descricao = this.formulario.controls['descricao'].value;
    saida.isFixa = this.formulario.controls['isFixa'].value;
    saida.isPago = this.formulario.controls['isPago'].value;
    saida.parcelas = this.formulario.controls['parcelas'].value
      ? this.formulario.controls['parcelas'].value
      : 0;
    saida.tipoOperacao = TipoOperacao.Saida;
    saida.mesReferenciaId = this.mesReferenciaId;
    if (this.isEdicao) {
      saida.id = this.isEdicao.id;
    }
    return saida;
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
      // console.log('saida', this.preemcherForm());
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
