import { Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Select } from 'primeng/select';
import { InputNumber } from 'primeng/inputnumber';
import { RecipeService } from '../service/recipe-service';
import { Router, RouterLink } from '@angular/router';
import { Receita } from '../models/receita.model';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { AutoComplete } from 'primeng/autocomplete';
import { NgClass } from '@angular/common';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-receita-cadastro',
  imports: [
    Button,
    Card,
    Select,
    InputNumber,
    FormsModule,
    InputText,
    RouterLink,
    Textarea,
    AutoComplete,
    NgClass,
    Toast
  ],
  providers: [MessageService],
  templateUrl: './receita-cadastro.html',
  styleUrl: './receita-cadastro.css',
})
export class ReceitaCadastro {
  private recipeService = inject(RecipeService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  categoriasOpcoes = [
    { label: 'Doce', value: 'DOCE' },
    { label: 'Salgado', value: 'SALGADO' },
    { label: 'Bebida', value: 'BEBIDA' },
    { label: 'Sobremesa', value: 'SOBREMESA' },
  ];
  receita: Receita = {
    nome: '',
    categoria: 'SALGADO',
    tempoPreparo: 1,
    porcoes: 1,
    ingredientes: [],
    modoPreparo: '',
    dataCadastro: new Date().toISOString(),
  };

  salvar() {
    this.recipeService.createRecipe(this.receita).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Receita cadastrada com sucesso!',
        });
        setTimeout(() => this.voltar(), 1500);
      },
      error: (err) => {
        console.error('Erro ao salvar receita', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível salvar a receita.',
        });
      },
    });
  }

  voltar() {
    this.router.navigate(['/receitas']);
  }
}
