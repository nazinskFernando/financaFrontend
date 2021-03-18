import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-saida',
  templateUrl: './form-saida.component.html',
  styleUrls: ['./form-saida.component.scss'],
})
export class FormSaidaComponent implements OnInit {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {}
  open(content) {
    this.modalService.open(content);
  }
}
