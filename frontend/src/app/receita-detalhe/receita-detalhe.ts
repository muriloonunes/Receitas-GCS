import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RecipeService } from '../service/recipe-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Receita } from '../models/receita.model';
import { Toast } from 'primeng/toast';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-receita-detalhe',
  imports: [Toast, ConfirmDialog, Button, Card, Tag],
  providers: [ConfirmationService, MessageService],
  templateUrl: './receita-detalhe.html',
  styleUrl: './receita-detalhe.css',
})
export class ReceitaDetalhe implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private recipeService = inject(RecipeService);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private cd = inject(ChangeDetectorRef);

  receita: Receita | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.carregarReceita(Number(id));
    }
  }

  carregarReceita(id: number) {
    this.recipeService.getRecipeById(id).subscribe({
      next: (receitaCarregada) => {
        this.receita = receitaCarregada;
        this.cd.markForCheck();
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Receita não encontrada.',
        });
        setTimeout(() => this.voltar(), 1500);
      },
    });
  }

  confirmarExclusao() {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja excluir a receita "${this.receita?.nome}"?`,
      header: 'Confirmar Exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim, excluir',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => this.excluir(),
    });
  }

  private excluir() {
    if (!this.receita?.id) return;

    this.recipeService.deleteRecipe(this.receita.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Receita excluída com sucesso!',
        });
        setTimeout(() => this.voltar(), 1500);
      },
      error: () =>
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível excluir a receita.',
        }),
    });
  }

  formatarCategoria(categoria: string): string {
    if (!categoria) return '';
    return categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();
  }

  voltar() {
    this.router.navigate(['/receitas']);
  }
}
