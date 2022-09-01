import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Pokemon } from "./Pokemon";
import { IPokemon } from "./types";
import { PokemonFetch } from "./PokemonFetch";
import "./App.css";

const queryClient = new QueryClient();

export function App(props: IPokemon): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
   <PokemonFetch/>
   </QueryClientProvider>
  );
}

