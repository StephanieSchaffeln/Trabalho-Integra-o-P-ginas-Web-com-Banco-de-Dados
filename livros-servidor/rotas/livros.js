// ARQUIVO: rotas/livros.js

// (b) Importar express e obter o Router
const express = require('express');
const router = express.Router();

// (b) Importar as funções do DAO
// Usamos '../modelo' para "subir" um nível de pasta
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// (c) Rota GET para a raiz ('/') - Obter todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    // (c) "no formato JSON"
    res.json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter livros', erro: error.message });
  }
});

// (d) Rota POST para a raiz ('/') - Incluir um novo livro
router.post('/', async (req, res) => {
  try {
    // (d) "do corpo da requisição"
    const livro = req.body; 
    await incluir(livro);
    // (d) "mensagem indicando sucesso ou falha"
    res.json({ mensagem: 'Livro incluído com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Falha ao incluir livro', erro: error.message });
  }
});

// (e) Rota DELETE para '/:id' - Excluir um livro pelo código
router.delete('/:id', async (req, res) => {
  try {
    // (e) "extração do segmento com o código" (vem dos params)
    const codigo = req.params.id; 
    await excluir(codigo);
    // (e) "mensagem indicando sucesso ou falha"
    res.json({ mensagem: 'Livro excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Falha ao excluir livro', erro: error.message });
  }
});

// (f) Exportar o router
module.exports = router;