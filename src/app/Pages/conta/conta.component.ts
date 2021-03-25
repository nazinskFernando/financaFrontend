import { MesReferencia } from './../../Models/MesReferencia';
import { MesReferenciaService } from './../../Services/mesReferencia.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss'],
})
export class ContaComponent implements OnInit {
  formulario: FormGroup;
  totalEntrada: number;
  totalSaida: number;
  total: number = 0;
  selecionaMesAtual: boolean = true;
  tipoSelecao: number = 2;
  mesesReferencia = new Array<MesReferencia>();
  mesAtual = new MesReferencia();
  data: string;
  mostrarConteudo: boolean = false;

  constructor(
    private mesreferenciaService: MesReferenciaService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.validacao();
    this.buscarMesesRferencia();
  }
  validacao() {
    this.formulario = this.fb.group({
      mesAno: [''],
    });
  }
  selecionarLista(valor) {
    this.tipoSelecao = valor;
  }

  selecionarMesAno() {
    var selecionado = this.formulario.controls['mesAno'].value;
    this.mesesReferencia.forEach((m) => {
      if (m.id == selecionado) {
        this.mesAtual = m;
      }
    });
    this.tipoSelecao = 2;
  }

  buscarMesesRferencia() {
    this.mesreferenciaService.buscarTodos().subscribe(
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
    this.mostrarConteudo = true;
    this.formulario.controls['mesAno'].setValue(this.mesAtual.id);
  }

  atualizarEntrada(valor) {
    this.totalEntrada = valor;
    this.valorTotal();
  }
  atualizarSaida(valor) {
    this.totalSaida = valor;
    this.valorTotal();
  }
  valorTotal() {
    this.total = this.totalEntrada - this.totalSaida;
  }
}
