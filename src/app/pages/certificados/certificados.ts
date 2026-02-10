import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";

import { RouterLink } from "@angular/router";
import { CertificadoService } from '../../services/certificado.service';
import { ItemCertificado } from '../../components/item-certificado/item-certificado';
import { Certificado } from '../../Interface/certificado';

@Component({
  selector: 'app-certificados',
  imports: [SecondaryButton, RouterLink, ItemCertificado],
  templateUrl: './certificados.html',
})
export class Certificados implements OnInit {

  certificados: Certificado[] = [];

  constructor(private certificadoService: CertificadoService) { }

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;
  }



}
