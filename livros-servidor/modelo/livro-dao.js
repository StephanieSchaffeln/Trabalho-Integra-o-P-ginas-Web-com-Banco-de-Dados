// ARQUIVO: modelo/livro-dao.js

// Definir a variável "Livro", referenciando o modelo exportado por "livro-schema"
const Livro = require('./livro-schema');

// Adicionar a função "obterLivros", no estilo Arrow Function, assíncrona
const obterLivros = async () => {
  // Retorna o conjunto de livros obtidos na chamada para o método "find"
  return await Livro.find();
};

// Adicionar a função "incluir", no estilo Arrow Function, assíncrona
const incluir = async (livro) => {
  // Invoca o método "create", de "Livro", com a passagem do valor fornecido
  return await Livro.create(livro);
};

// Adicionar a função "excluir", no estilo Arrow Function, assíncrona
const excluir = async (codigo) => {
  // Invoca o método "deleteOne", de "Livro", onde será utilizado um objeto JSON
  // com o atributo "_id" recebendo o valor de "codigo"
  return await Livro.deleteOne({ _id: codigo });
};

// Exportar as três funções definidas
module.exports = {
  obterLivros,
  incluir,
  excluir
};