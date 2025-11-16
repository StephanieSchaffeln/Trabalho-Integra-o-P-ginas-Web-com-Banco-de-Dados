// ARQUIVO: src/app/app.routes.ts

import { Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

export const routes: Routes = [
  // Rota Raiz (/): Mostra a lista de livros
  { path: '', component: LivroListaComponent },
  
  // Rota /dados: Mostra o formulário de cadastro
  { path: 'dados', component: LivroDadosComponent }
];