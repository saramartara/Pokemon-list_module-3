import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const pokemonsItems = props.getPokemons.map((pokemonItem) => {
    return (
      <li key={pokemonItem.id} id={pokemonItem.id}>
        <Pokemon pokemon={pokemonItem} />
      </li>
    );
  });
  return (
    <div>
      <ul>{pokemonsItems}</ul>
    </div>
  );
};

export default PokeList;
