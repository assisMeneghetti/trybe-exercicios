import React, { Component } from 'react';
import AverageWeight from './AveregeWeight';
// import pokemons from './data';
import PokeName from './PokeName';
import PokeType from './PokeType';
import Image from './Image';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div className="pokemon-card">
        <PokeName name={pokemon.name} />
        <PokeType type={pokemon.type} />
        <AverageWeight averageWeight={pokemon.averageWeight} />
        <Image image={pokemon.image} name={pokemon.name} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default Pokemon