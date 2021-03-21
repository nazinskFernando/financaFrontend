import { TransacaoResumoMes } from './../../Models/TransacaoResumoMes';
import { TransacaoService } from './../../Services/transacao.service';
import { MesReferenciaService } from './../../Services/mesReferencia.service';
import { Transacao } from './../../Models/Enum/transacao.enum';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MesReferencia } from 'src/app/Models/MesReferencia';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  tipoTransacao: Transacao;
  mesesReferencia = new Array<MesReferencia>();
  formulario: FormGroup;
  mesAtual = new MesReferencia();
  mesAtualId: number;
  transacaoResumo = new TransacaoResumoMes();
  carregando: boolean = false;

  constructor(
    private mesReferenciaService: MesReferenciaService,
    private transacaoService: TransacaoService,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buscarMeses();
    this.validacao();
  }

  atualizar() {
    this.carregando = false;
    this.buscarMeses();
  }

  validacao() {
    this.formulario = this.fb.group({
      mesAno: [''],
    });
  }

  defineTipo(tipo) {
    this.tipoTransacao = tipo;
    console.log('tipo', tipo);
    console.log(' this.tipoTransacao', this.tipoTransacao);
  }

  buscarMeses() {
    this.mesReferenciaService.buscarTodos().subscribe(
      (mesesReferencia: MesReferencia[]) => {
        this.mesesReferencia = mesesReferencia;
        this.selecionarMesAtual();
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

  selecionarMesAtual() {
    var data = new Date();
    this.mesesReferencia.forEach((mr) => {
      if (mr.mes == data.getMonth() + 1 && mr.ano == data.getFullYear()) {
        this.mesAtual = mr;
      }
    });
    this.formulario.controls['mesAno'].setValue(this.mesAtual.id);
    this.buscarResumoMes();
  }

  buscarResumoMes() {
    this.transacaoService.buscarResumoMes(this.mesAtual.id).subscribe(
      (transacaoResumoMes: TransacaoResumoMes) => {
        this.transacaoResumo = transacaoResumoMes;
        this.carregando = true;
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

  selecionarMes() {
    this.carregando = false;
    this.mesAtual.id = this.formulario.controls['mesAno'].value;
    this.buscarResumoMes();
  }
}
