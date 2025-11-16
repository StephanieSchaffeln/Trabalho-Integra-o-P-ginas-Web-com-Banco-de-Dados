// ARQUIVO: src/App.tsx (COMPLETAMENTE MODIFICADO)

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    // 1. Configura o "Roteador" para o navegador
    <BrowserRouter>
      {/* 2. Cria uma barra de navegação */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Catálogo</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* Link para a rota "/" */}
                <Link className="nav-link" to="/">Lista</Link>
              </li>
              <li className="nav-item">
                {/* Link para a rota "/dados" */}
                <Link className="nav-link" to="/dados">Novo</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 3. Define as "Rotas" (qual componente mostrar) */}
      <Routes>
        {/* Rota Raiz: Mostra a lista de livros */}
        <Route path="/" element={<LivroLista />} />
        
        {/* Rota /dados: Mostra o formulário de cadastro */}
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;