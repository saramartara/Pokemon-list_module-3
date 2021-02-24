import React, { useState } from 'react';
import '../stylesheets/App.scss';
import data from '../data/data.json';
import PokeList from './PokeList';

const App = () => {
  const [pokemon] = useState(data);

  return (
    <div className="App">
      <h2 className="App_title">Mi lista de Pokemon</h2>
      <PokeList getPokemons={pokemon} />
    </div>
  );
};

export default App;
