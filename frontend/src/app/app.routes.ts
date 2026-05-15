import { Routes } from '@angular/router';
import { ReceitasLista } from './receitas-lista/receitas-lista';
import { ReceitaCadastro } from './receita-cadastro/receita-cadastro';

export const routes: Routes = [
  { path: '', redirectTo: 'receitas', pathMatch: 'full' },
  { path: 'receitas', component: ReceitasLista },
  { path: 'receitas/nova', component: ReceitaCadastro },
];
