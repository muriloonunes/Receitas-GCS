export type Categoria = 'DOCE' | 'SALGADO' | 'BEBIDA' | 'SOBREMESA';

export interface Receita {
  id?: number;
  nome: string;
  categoria: Categoria;
  tempoPreparo: number;
  porcoes: number;
  ingredientes: string[];
  modoPreparo: string;
  dataCadastro?: string;
}
