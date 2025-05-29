import type { State } from "./state.js";

export async function commandMapForward(state: State) {
  const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (const loc of locations.results) {
    console.log(loc.name);
  }
}

export async function commandMapBack(state: State) {
  if (!state.prevLocationsURL) {
    throw new Error("you're on the first page");
  }

  const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (const loc of locations.results) {
    console.log(loc.name);
  }
}

export async function commandExplore(state: State, ...args: string[]) {
  const locationName = args[0];
  if (!locationName) {
    throw new Error("location name is required, e.g. 'command explore Johto'");
  }

  const location = await state.pokeAPI.fetchLocation(locationName.toLowerCase());

  for (const pokemon of location.pokemon_encounters) {
    console.log(pokemon.pokemon.name);
  }

}

export async function commandCatch(state: State, ...args: string[]) {
  const pokemonName = args[0];
  if (!pokemonName) {
    throw new Error("pokemon name is required, e.g. 'command catch Pikachu'");
  }
  console.log(`Throwing a Pokeball at ${pokemonName}...`);
  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName.toLowerCase());

  let userExperience = Math.floor(Math.random() * 1000);
   if (userExperience > pokemon.base_experience) {
      console.log(`${pokemonName} was caught!`);
      state.pokedex[pokemonName] = pokemon;
    } else {
      console.log(`${pokemonName} escaped!`);
    }

}

export async function commandInspect(state: State, ...args: string[]) {
  const pokemonName = args[0];
  if (!pokemonName) {
    throw new Error("pokemon name is required, e.g. 'command inspect Pikachu'");
  }

  const pokemon = state.pokedex[pokemonName];
  if (!pokemon) {
    throw new Error(`you have not caught that pokemon`);
  }

  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log("Stats:");
  pokemon.stats.forEach(stat => {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
  });
  console.log("Types:");
  pokemon.types.forEach(type => {
    console.log(`  - ${type.type.name}`);
  });

}
