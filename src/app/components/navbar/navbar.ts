import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  ngOnInit(): void {
    this.mensagem();
  }

  mensagem() {
    console.log('O meu componente navbar foi iniciado. dentro de uma função');
  }
}
