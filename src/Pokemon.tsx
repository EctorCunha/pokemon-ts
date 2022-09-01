import { ReactElement } from "react";
import { pokemons } from "./data";

export function Pokemon():ReactElement{
  return(
    <>
      {pokemons.map((pokemon) => {
        return (
        <div key={pokemon.id}>
          <h1>{pokemon.nome}</h1>
          <p>{pokemon.kilos}</p>
          <p>{pokemon.pokemon}</p>
          <p>{pokemon.categoria}</p>
          </div>
          )
      })}
    </>
  )};
