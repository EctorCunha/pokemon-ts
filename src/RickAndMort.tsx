import { ReactElement, useEffect, useState } from "react";


interface Character {
    id: number;
    name: string;
    status: string;
}

async function getCharacters(): Promise<Character[]> {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results;
}

export function RickAndMort(): ReactElement {
    const [characters, setCharacters] = useState<Character[]>([]);
    
    useEffect(() => {
        getCharacters().then((characters) => setCharacters(characters));
    }, []);
    return (
        <>
            {characters.map((character) => {
                return (
                    <div key={character.id}>
                        <h1>{character.name}</h1>
                        <p>{character.status}</p>
                    </div>
                );
            })}
        </>
    );
}