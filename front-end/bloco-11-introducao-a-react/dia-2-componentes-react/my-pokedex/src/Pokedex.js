import React, { Component } from "react";
import pokemons from './data';
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    return pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />);
  }
}

export default Pokedex;
