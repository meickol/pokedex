import type { State } from "./state.js";

export async function commandPokedex(state: State) {
  const caughtPokemon = Object.keys(state.pokedex);
  
  if (caughtPokemon.length === 0) {
    console.log("You haven't caught any Pokemon yet!");
    return;
  }

  console.log("Your Pokedex:");
  caughtPokemon.forEach(pokemon => {
    console.log(`- ${pokemon}`);
  });
} 