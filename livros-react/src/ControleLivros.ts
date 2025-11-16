// ARQUIVO: src/ControleLivros.ts

import type { Livro } from './modelo/Livro'; // Importa a interface que criamos

// (a) Alterar a classe ControleLivros (estamos criando-a)
// (b) Definir a constante baseURL
const baseURL = "http://localhost:3030/livros";

// (b) Definir a interface LivroMongo (seguindo a tabela do vídeo)
interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

// Criar a classe ControleLivros
class ControleLivros {

  // (e) Alterar o método obterLivros (assíncrono com fetch)
  async obterLivros(): Promise<Array<Livro>> {
    const response = await fetch(baseURL, { method: 'GET' });
    const livrosMongo: LivroMongo[] = await response.json();
    
    // Mapeamento de _id para codigo
    const livros = livrosMongo.map((livroMongo) => ({
      codigo: livroMongo._id,
      codEditora: livroMongo.codEditora,
      titulo: livroMongo.titulo,
      resumo: livroMongo.resumo,
      autores: livroMongo.autores
    }));
    
    return livros;
  }

  // (f) Alterar o método excluir (assíncrono com fetch)
  async excluir(codigo: string): Promise<boolean> {
    const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return response.ok;
  }

  // (g) Alterar o método incluir (assíncrono com fetch)
  async incluir(livro: Livro): Promise<boolean> {
    
    // Converte de Livro para LivroMongo (enviando _id como null)
    const livroMongo: LivroMongo = {
      _id: null,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };

    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(livroMongo)
    });
    
    return response.ok;
  }
}

// Exporta a classe
export default ControleLivros;