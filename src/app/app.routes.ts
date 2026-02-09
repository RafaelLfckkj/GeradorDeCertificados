import { Routes } from '@angular/router';
import { CertificadoForm } from './pages/certificado-form/certificado-form';
import { Certificados } from './pages/certificados/certificados';
import { CertificadoComponent } from './pages/certificadoComponent/certificadoComponent';

export const routes: Routes = [
  {
    path: '',
    component: Certificados,
  },
  {
    path: 'certificados/novo',
    component: CertificadoForm,
  },
  {
    path: 'certificados/:id',
    component: CertificadoComponent,
  },
];
