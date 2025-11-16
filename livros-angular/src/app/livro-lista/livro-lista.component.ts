
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../livro'; 
import { ControleLivrosService } from '../controle-livros.service'; 

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.html',
  styleUrls: ['./livro-lista.css'],
  imports: [CommonModule]
})
export class LivroListaComponent implements OnInit {
  public livros: Livro[] = []; // Vetor para os livros

  // Injeta o serviço no construtor
  constructor(private servLivros: ControleLivrosService) { }

  //  Implementação do ngOnInit (similar ao useEffect)
  ngOnInit(): void {
    this.servLivros.obterLivros().subscribe((dados) => {
      // (a) Atribuição do resultado ao vetor 'livros'
      this.livros = dados;
    });
  }

  // (b) Implementação do método excluir
  excluir(codigo: string): void {
    this.servLivros.excluir(codigo).subscribe(() => {
      // (b) 'then' (no subscribe) - Recarrega a lista
      this.servLivros.obterLivros().subscribe((dados) => {
        this.livros = dados;
      });
    });
  }
}