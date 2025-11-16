import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './livro'; 

interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  // Endereço da  API
  readonly baseURL = "http://localhost:3030/livros";

  // Injeta o HttpClient
  constructor(private http: HttpClient) { }

  // Método para obter todos os livros
  obterLivros(): Observable<Livro[]> {
    // A requisição GET e mapeia a resposta
    return this.http.get<LivroMongo[]>(this.baseURL).pipe(
      map((livrosMongo) => 
        livrosMongo.map((livroMongo) => ({
          codigo: livroMongo._id,
          codEditora: livroMongo.codEditora,
          titulo: livroMongo.titulo,
          resumo: livroMongo.resumo,
          autores: livroMongo.autores
        }))
      )
    );
  }

  // Método para incluir um livro
  incluir(livro: Livro): Observable<any> {
    // Converte de Livro para LivroMongo
    const livroMongo: LivroMongo = {
      _id: null,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };
    return this.http.post(this.baseURL, livroMongo);
  }

  // Método para excluir um livro
  excluir(codigo: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/${codigo}`);
  }
}