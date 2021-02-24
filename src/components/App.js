import React, { useState } from 'react';
import '../stylesheets/App.scss';
import data from '../data/data.json';

const App = () => {
  console.log(data);

  return (
    <div className="App">
      <h1>Pokemon List</h1>
    </div>
  );
};

export default App;
