// ARQUIVO: index.js (MODIFICADO)

require('dotenv').config();
const express = require('express');

// (e - Parte 2) Importa o CORS
const cors = require('cors'); 

// Importa a conexão (já executa)
require('./modelo/conexao'); 

// (b - Parte 2) Define a variável livroRouter, referenciando rotas/livros
const livroRouter = require('./rotas/livros');

const app = express();

// (a - Parte 2) MUDOU: Define a porta como 3030
const port = process.env.PORT || 3030; 

// (e - Parte 2) Utiliza o CORS na aplicação
app.use(cors());

// NOVO: Middleware para o Express "entender" o corpo (body) JSON
// Isso é essencial para a sua Rota POST (passo 'd') funcionar!
app.use(express.json());

// (c - Parte 2) Define a rota base '/livros' e o objeto de roteamento
app.use('/livros', livroRouter); 

// --- ROTA DE TESTE ANTIGA FOI REMOVIDA ---
// O app.get('/') não existe mais, pois foi substituído pelo livroRouter

// "Escuta" o servidor
app.listen(port, () => {
  // MUDOU: Atualiza o log da porta
  console.log(`Servidor rodando em http://localhost:${port}`);
});