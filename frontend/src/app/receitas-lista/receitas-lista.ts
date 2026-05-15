import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { RouterLink } from '@angular/router';
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
  receitas: Receita[] = [
    // {
    //   id: 1,
    //   nome: 'Bolo de Chocolate',
    //   categoria: 'DOCE',
    //   tempoPreparo: 45,
    //   porcoes: 8,
    //   ingredientes: [
    //     '2 xícaras de farinha de trigo',
    //     '1 xícara de chocolate em pó',
    //     '2 xícaras de açúcar',
    //     '3 ovos',
    //     '1 xícara de leite',
    //     '1/2 xícara de óleo',
    //   ],
    //   modoPreparo:
    //     'Misture todos os ingredientes secos. Adicione os ovos, leite e óleo. Bata bem e asse em forno preaquecido a 180°C por 40 minutos.',
    //   dataCadastro: new Date().toISOString(),
    // },
    // {
    //   id: 2,
    //   nome: 'Pizza Margherita',
    //   categoria: 'SALGADO',
    //   tempoPreparo: 30,
    //   porcoes: 4,
    //   ingredientes: [
    //     '1 massa de pizza',
    //     '200g de mussarela',
    //     '3 tomates',
    //     'Manjericão fresco',
    //     'Azeite',
    //     'Sal a gosto',
    //   ],
    //   modoPreparo:
    //     'Abra a massa, adicione o molho de tomate, mussarela fatiada, tomates em rodelas e manjericão. Regue com azeite e asse por 15-20 minutos a 220°C.',
    //   dataCadastro: new Date().toISOString(),
    // },
    // {
    //   id: 3,
    //   nome: 'Suco de Laranja Natural',
    //   categoria: 'BEBIDA',
    //   tempoPreparo: 5,
    //   porcoes: 2,
    //   ingredientes: ['6 laranjas', 'Açúcar a gosto (opcional)', 'Gelo'],
    //   modoPreparo:
    //     'Esprema as laranjas, coe se preferir, adicione açúcar a gosto e sirva com gelo.',
    //   dataCadastro: new Date().toISOString(),
    // },
  ];

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
      },
      error: (err) => console.error('Erro ao buscar receitas', err),
    });
  }
}
