import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';
import { RecipeService } from '../service/recipe-service';
import { Receita } from '../models/receita.model';
import { Tag } from 'primeng/tag';
import { InputText } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';

@Component({
  selector: 'app-receitas-lista',
  imports: [FormsModule, Card, Button, Tag, InputText, IconField, InputIcon],
  templateUrl: './receitas-lista.html',
  styleUrl: './receitas-lista.css',
})
export class ReceitasLista implements OnInit {
  private recipeService = inject(RecipeService);
  private router = inject(Router);
  private cd = inject(ChangeDetectorRef);

  receitas: Receita[] = [];
  receitasFiltradas: Receita[] = [];
  filtroReceitas: string = '';

  ngOnInit(): void {
    this.carregarReceitas();
  }

  isReceitaNova(date: string | undefined): boolean {
    if (!date) return false;
    const now = new Date();
    const receitaDate = new Date(date);
    const diferencaDias = Math.floor((now.getTime() - receitaDate.getTime()) / (1000 * 3600 * 24));
    return diferencaDias < 1;
  }

  private carregarReceitas(): void {
    this.recipeService.getRecipes().subscribe({
      next: (receitas) => {
        this.receitas = receitas;
        this.filtrarReceitas();
        this.cd.markForCheck();
      },
      error: (err) => console.error('Erro ao buscar receitas', err),
    });
  }

  criarReceita() {
    this.router.navigate(['/receitas/nova']);
  }

  verDetalhe(id: number | undefined) {
    if (id) {
      this.router.navigate(['/receitas', id]);
    }
  }

  formatarCategoria(categoria: string): string {
    if (!categoria) return '';
    return categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();
  }

  protected filtrarReceitas() {
    if (!this.filtroReceitas || this.filtroReceitas.trim() === '') {
      this.receitasFiltradas = [...this.receitas];
    } else {
      const filtro = this.filtroReceitas.toLowerCase();
      this.receitasFiltradas = this.receitas.filter(
        (receita) =>
          receita.nome.toLowerCase().includes(filtro) ||
          (receita.ingredientes &&
            receita.ingredientes.some((ing) => ing.toLowerCase().includes(filtro))),
      );
    }
    this.cd.markForCheck();
  }
}
