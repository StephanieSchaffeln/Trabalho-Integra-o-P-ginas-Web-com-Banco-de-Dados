// ARQUIVO: modelo/livro-schema.js (CORRIGIDO)

// (e) Importa a conexão 'banco'
const banco = require('./conexao');

// (e) Define a variável 'LivroSchema'
const LivroSchema = new banco.Schema({
  // A tabela da imagem (não precisa do _id, o Mongoose cuida disso)
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String]
});

// (f) Associa o 'LivroSchema' à coleção 'livros' e ao modelo 'Livro'
// (g) Exporta o modelo 'Livro'
const Livro = banco.model('livros', LivroSchema);
module.exports = Livro;