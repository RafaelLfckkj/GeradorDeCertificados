import { Component, ViewChild } from '@angular/core';
import { PrimaryButton } from '../../components/primary-button/primary-button';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { FormsModule, NgForm } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { Certificado } from '../../Interface/certificado';
import { CertificadoService } from '../../services/certificado.service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';


@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule],
  templateUrl: './certificado-form.html',
})
export class CertificadoForm {
  constructor(private certificadoService: CertificadoService, private route: Router) {}

  @ViewChild('form') form!: NgForm;

  certificado: Certificado = {
    id: '',
    atividades: [],
    nome: '',
    dataEmiss: '',
  };
  atividade: string = '';

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade() {
      if(this.atividade.length === 0) {
        return;
      }

    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  submit() {
    if (!this.formValido()) {
      return;
    }
    this.certificado.dataEmiss = this.dataAtual();
    this.certificado.id = uuidv4();
    this.certificadoService.adicionarCertificado(this.certificado);

    this.route.navigate(['certificados', this.certificado.id]);

    // this.certificado = this.estadoInicialCertificado();
    // this.form.resetForm();
  }

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }

  estadoInicialCertificado(): Certificado {
    return {
      id: '',
      atividades: [],
      nome: '',
      dataEmiss: '',
    };
  }
}
