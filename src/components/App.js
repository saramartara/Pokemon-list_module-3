import React, { useState } from 'react';
import '../stylesheets/App.scss';
import data from '../data/data.json';
import PokeList from './PokeList';

const App = () => {
  // const [pokemon, setPokemon] = useState(data);
  // console.log(useState);

  return (
    <div className="App">
      <h1>Mi lista de Pokemon</h1>
      <PokeList getPokemons={data} />
    </div>
  );
};

export default App;
