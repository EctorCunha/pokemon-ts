import { ReactElement, useEffect, useState } from "react";


interface Pokemon {
    id?: number;
    name: string;
    url: string;
}

async function getPokemons(): Promise<Pokemon[]> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=200');
    const data = await response.json();
    return data.results;
}

export function PokemonFetch(): ReactElement {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    
    useEffect(() => {
        getPokemons().then((characters) => setPokemons(characters));
    }, []);
    return (
        <div className="cards">
            <h1>Pokemons direto da API</h1>
            {pokemons.map((pokemon) => {
                return (
                    <div className="card" key={pokemon.id}>
                        <h2>{pokemon.name}</h2>
                        <p>{pokemon.url}</p>
                    </div>
                );
            })}
        </div>
    );
}