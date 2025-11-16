// ARQUIVO: src/main.ts (CORRIGIDO)

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // 1. CORRIJA O IMPORT AQUI

bootstrapApplication(AppComponent, appConfig) // 2. CORRIJA A INICIALIZAÇÃO AQUI
  .catch((err) => console.error(err));