// ARQUIVO: src/LivroLista.tsx

import React, { useState, useEffect } from 'react';
import ControleLivros from './ControleLivros'; // Nosso controlador
import type { Livro } from './modelo/Livro'; // Nosso modelo

// Instância do nosso controlador
const controleLivros = new ControleLivros();

// Componente LinhaLivro (uma linha da tabela)
interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: string) => void;
}

const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  // Desestruturação das props para facilitar o uso
  const { livro, excluir } = props;

  // Função para lidar com o clique no botão excluir
  const handleExcluir = () => {
    // Confirma que 'livro.codigo' não é nulo ou indefinido antes de chamar
    if (livro.codigo) {
      excluir(livro.codigo);
    } else {
      console.error("Tentativa de excluir livro sem código.");
    }
  };

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{livro.codEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        {/* Botão de Excluir */}
        <button onClick={handleExcluir} className="btn btn-danger">
          Excluir
        </button>
      </td>
    </tr>
  );
};

// Componente Principal LivroLista
const LivroLista: React.FC = () => {
  // Estado para armazenar os livros
  const [livros, setLivros] = useState<Array<Livro>>([]);
  // Estado para controlar o carregamento
  const [carregado, setCarregado] = useState(false);

  // useEffect para carregar os dados (seguindo o documento)
  useEffect(() => {
    if (!carregado) {
      controleLivros.obterLivros().then((dados) => {
        setLivros(dados);
        setCarregado(true);
      });
    }
  }, [carregado]); // Depende de 'carregado'

  // Método para excluir um livro (seguindo o documento)
  const excluir = (codigo: string) => {
    controleLivros.excluir(codigo).then(() => {
      // Força o 'useEffect' a rodar de novo para recarregar a lista
      setCarregado(false); 
    });
  };

  return (
    <main className="container">
      <h1>Catálogo de Livros</h1>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro 
              key={livro.codigo} 
              livro={livro} 
              excluir={excluir} 
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;