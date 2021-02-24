import React from 'react';

const Pokemon = (props) => {
  const types = props.pokemon.types.map((type, index) => {
    return (
      <li key={index} id={index}>
        {type}
      </li>
    );
  });
  return (
    <article>
      <img src={props.pokemon.url} />
      <h4>{props.pokemon.name}</h4>
      <ul>{types}</ul>
    </article>
  );
};

export default Pokemon;
