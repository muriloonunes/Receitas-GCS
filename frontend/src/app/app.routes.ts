import { Routes } from '@angular/router';
import { ReceitasLista } from './receitas-lista/receitas-lista';

export const routes: Routes = [
  { path: '', redirectTo: 'receitas', pathMatch: 'full' },
  { path: 'receitas', component: ReceitasLista },
];
