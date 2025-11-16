// ARQUIVO: src/LivroDados.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivros from './ControleLivros';
import type { Livro } from './modelo/Livro';

// Instância do nosso controlador
const controleLivros = new ControleLivros();

// Componente Principal LivroDados
const LivroDados: React.FC = () => {
  // Hook para navegação (redirecionamento)
  const navigate = useNavigate();

  // (a) Construtor - Definindo os estados do formulário
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState(''); // Vamos tratar como textarea
  const [codEditora, setCodEditora] = useState(0); // Começa com 0

  // (b) Método incluir
  const incluir = async (e: React.FormEvent) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Cria o objeto 'livro' com os dados do estado
    const livro: Livro = {
      codigo: null, // O back-end vai gerar o código
      titulo: titulo,
      resumo: resumo,
      autores: autores.split('\n'), // Transforma o textarea (autores por linha) em array
      codEditora: codEditora
    };

    // Chama o método 'incluir' do controlador
    await controleLivros.incluir(livro);

    // (c) Chama a navegação para a raiz
    navigate('/'); // Redireciona para a lista de livros
  };

  // Renderização do formulário
  return (
    <main className="container">
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input 
            type="text" 
            id="titulo" 
            className="form-control" 
            value={titulo} 
            onChange={(e) => setTitulo(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">Resumo</label>
          <textarea 
            id="resumo" 
            className="form-control" 
            value={resumo} 
            onChange={(e) => setResumo(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="codEditora" className="form-label">Código da Editora</label>
          <input 
            type="number" 
            id="codEditora" 
            className="form-control" 
            value={codEditora} 
            onChange={(e) => setCodEditora(Number(e.target.value))} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">Autores (um por linha)</label>
          <textarea 
            id="autores" 
            className="form-control" 
            value={autores} 
            onChange={(e) => setAutores(e.target.value)} 
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Salvar Dados
        </button>
      </form>
    </main>
  );
};

export default LivroDados;