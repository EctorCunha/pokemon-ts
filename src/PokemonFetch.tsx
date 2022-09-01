import { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { IPokemon } from "./types";

interface Pokemon {
  id?: number;
  name: string;
  url: string;
  image: string;
}

async function getPokemons(): Promise<Pokemon[]> {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=30&offset=1"
    );
    const data = await response.json();
    return data.results;

  } catch (error) {
    console.log(error)
    throw error
  }
}

export function PokemonFetch(): ReactElement {
    const { data, isLoading, error } = useQuery<Pokemon[], Error>(["pokemons"], ()=> getPokemons());

    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Não podemos carregar os personagens agora. Tente novamente mais tarde.</div>

//   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
//   const [pokemonsImage, setPokemonsImage] = useState<Pokemon[]>([]);

//   useEffect(() => {
//     getPokemons().then((pokemons) => setPokemons(pokemons));
//     // getPokemonsImage().then((pokemons) => setPokemonsImage(pokemons));
//   }, []);


  return (
    <div className="cards">
      <h1>Pokemons direto da API</h1>
      {data?.map((pokemon: Pokemon) => {
        return (
          <div className="card" key={pokemon.id}>
            {/* {data.results.map((pokemon) => {
              return <img src={pokemon.image} alt={pokemon.name} />;
            })} */}
            <img src={pokemon.image} alt="Imagem do pokemon" />
            <h2>{pokemon.name}</h2>
            <p>{pokemon.url}</p>
          </div>
        );
      })}
    </div>
  );
}
