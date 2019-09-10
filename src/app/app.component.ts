import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public itensMenu = [
    { nome: 'Categoria', icone: 'category', link: 'categoria' },
    { nome: 'Apartamentos', icone: 'king_bed', link: 'apartamento' }
  ]

  constructor(private router: Router) { }

  sair() {
    localStorage.removeItem('auth');
    this.router.navigate(['./login']);
  }
}
