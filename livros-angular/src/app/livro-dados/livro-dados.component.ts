// ARQUIVO: src/app/livro-dados/livro-dados.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. CORREÇÃO: Faltava importar o Router
import { Livro } from '../livro'; 
import { ControleLivrosService } from '../controle-livros.service'; // 2. CORREÇÃO: O caminho era '.service'
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.html',
  styleUrls: ['./livro-dados.css'],
  standalone: true, 
  imports: [
    FormsModule,
  
  ] 
})
export class LivroDadosComponent {
  public livro: Livro; 
  public autoresForm: string = ''; 

  constructor(
    private servLivros: ControleLivrosService,
    private router: Router
  ) {
    this.livro = {
      codigo: null,
      codEditora: 0,
      titulo: '',
      resumo: '',
      autores: []
    };
  }

  incluir(): void {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}