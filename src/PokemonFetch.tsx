import { ReactElement, useEffect, useState } from "react";


interface Pokemon {
    id?: number;
    name: string;
    url: string;
    image: string;
}

async function getPokemons(): Promise<Pokemon[]> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=1');
    const data = await response.json();
    return data.results;
}

async function getPokemonsImage(): Promise<Pokemon[]> {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?/url/sprities/dream_world/front_default');
    const data = await resp.json();
    return data.results;
}

export function PokemonFetch(): ReactElement {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [pokemonsImage, setPokemonsImage] = useState<Pokemon[]>([]);
    
    useEffect(() => {
        getPokemons().then((pokemons) => setPokemons(pokemons));
        getPokemonsImage().then((pokemons) => setPokemonsImage(pokemons));
    }, []);
    return (
        <div className="cards">
            <h1>Pokemons direto da API</h1>
            {pokemons.map((pokemon) => {
                return (
                    <div className="card" key={pokemon.id}>
                        {
                            pokemonsImage.map((pokemon) => {
                                return (
                                    <img src={pokemon.image} alt={pokemon.name} />
                                )
                            })
                        }
                        <img src={pokemon.image} alt="Imagem do pokemon" />
                        <h2>{pokemon.name}</h2>
                        <p>{pokemon.url}</p>
                    </div>
                );
            })}
        </div>
    );
}