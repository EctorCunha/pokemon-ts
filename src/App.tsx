import { ReactElement } from "react";
import { Pokemon } from "./Pokemon";
import { IPokemon } from "./types";
import "./App.css";
import { PokemonFetch } from "./PokemonFetch";



export function App(props: IPokemon): ReactElement {
  return (
   <PokemonFetch/>
  );
}

