import { Component, Input } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton],
  templateUrl: './item-certificado.html',
})
export class ItemCertificado {
  @Input() nomeAluno: string = '';
  @Input() dataEmiss: string = '';
  @Input() id: string = '';

  constructor(private router: Router) { }

  redirecionaCertificado(){
    this.router.navigate(["/certificados", this.id]);
  }
}
