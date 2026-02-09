import { Component } from '@angular/core';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, NgStyle],
  templateUrl: './certificado-form.html',
})
export class CertificadoForm {
  nome: string = '';
  atividade: string = '';
  atividades: string[] = [];

  formValido(){
    return this.atividades.length > 0 && this.nome.length > 0;
  }
}
