// ARQUIVO: modelo/conexao.js (CORRIGIDO)

// (c) Referencia a biblioteca mongoose
const mongoose = require('mongoose');

// (c) Define a variável 'options' com os atributos pedidos
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const dbURI = process.env.MONGODB_URI;

// (d) Efetua a conexão
mongoose.connect(dbURI, options)
  .then(() => console.log('Conexão ao MongoDB (via conexao.js) estabelecida!'))
  .catch((err) => console.log('Erro ao conectar ao MongoDB:', err.message));

// (d) Define a variável 'banco' e a exporta
const banco = mongoose;
module.exports = banco;