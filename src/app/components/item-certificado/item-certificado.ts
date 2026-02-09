import { Component } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton],
  templateUrl: './item-certificado.html',
})
export class ItemCertificado {
  id: string = '4';

  constructor(private router: Router) { }

  redirecionaCertificado(){
    this.router.navigate(["/certificados", 2]);
  }
}
