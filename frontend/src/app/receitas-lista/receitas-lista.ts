import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { RecipeService } from '../service/recipe-service';
import { Receita } from '../models/receita.model';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-receitas-lista',
  imports: [FormsModule, Card, Button, RouterLink, Tag],
  templateUrl: './receitas-lista.html',
  styleUrl: './receitas-lista.css',
})
export class ReceitasLista implements OnInit {
  private recipeService = inject(RecipeService);
  private router = inject(Router);
  private cd = inject(ChangeDetectorRef);

  receitas: Receita[] = [];

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
        this.cd.markForCheck();
      },
      error: (err) => console.error('Erro ao buscar receitas', err),
    });
  }

  criarReceita() {
    this.router.navigate(['/receitas/nova']);
  }
}
