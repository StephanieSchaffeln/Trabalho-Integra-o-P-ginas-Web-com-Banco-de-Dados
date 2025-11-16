export interface Livro {
  codigo?: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}