import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { PrimaryButton } from "./components/primary-button/primary-button";
import { SecondaryButton } from "./components/secondary-button/secondary-button";
import { ItemCertificado } from "./components/item-certificado/item-certificado";
import { BaseUi } from "./components/base-ui/base-ui";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, PrimaryButton, SecondaryButton, ItemCertificado, BaseUi],
  templateUrl: './app.html',

})
export class App {
  protected readonly title = signal('GeradorDeCertificados');
  exibirNavbar : boolean = true;
}
