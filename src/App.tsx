import "./App.css";

interface IPokemon {
  id: number;
  nome: string;
  kilos?: number;
  pokemon: boolean;
  categoria: string;
}

const pokemons: IPokemon[] = [
  {
    id: 1,
    nome: "bulbasaur",
    kilos: 6.9,
    pokemon: true,
    categoria: "semente",
  },
  {
    id: 2,
    nome: "charmander",
    kilos: 8.5,
    pokemon: true,
    categoria: "lagarto",
  },
  {
    id: 3,
    nome: "charizard",
    kilos: 95.5,
    pokemon: true,
    categoria: "chama",
  },
  {
    id: 4,
    nome: "ash",
    pokemon: false,
    categoria: "treinador",
  },
];

export function App(props: IPokemon) {
  return (
    <div>
      {pokemons.map((pokemon) => 
        <div key={pokemon.id}>
          <h1>{pokemon.nome}</h1>
          <p>{pokemon.kilos}</p>
          <p>{pokemon.pokemon}</p>
          <p>{pokemon.categoria}</p>
        )}
    </div>
  );
}

