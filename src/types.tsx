
export enum PokemonsEnum {
    CHAMA = "chama",
    TREINADOR = "treinador",
    SEMENTE = "semente",
}

export interface IPokemon {
    id: number;
    nome: string;
    kilos?: number;
    pokemon: boolean;
    categoria: string;
  }