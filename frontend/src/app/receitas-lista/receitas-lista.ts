import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../service/recipe-service';
import { Receita } from '../models/receita.model';

@Component({
  selector: 'app-receitas-lista',
  imports: [FormsModule, Card, Button, RouterLink],
  templateUrl: './receitas-lista.html',
  styleUrl: './receitas-lista.css',
})
export class ReceitasLista implements OnInit {
  private recipeService = inject(RecipeService);
  receitas: Receita[] = [];

  ngOnInit(): void {
    this.carregarReceitas();
  }

  private carregarReceitas(): void {
    this.recipeService.getRecipes().subscribe({
      next: (receitas) => {
        this.receitas = receitas;
      },
      error: (err) => console.error('Erro ao buscar receitas', err),
    });
  }
}
