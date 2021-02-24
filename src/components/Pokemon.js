import React from 'react';
import '../stylesheets/Pokemon.scss';

const Pokemon = (props) => {
  const types = props.pokemon.types.map((type, index) => {
    return (
      <li key={index} className="item__type--li">
        {type}
      </li>
    );
  });
  return (
    <article className="item">
      <img src={props.pokemon.url} />
      <h4 className="item__name">{props.pokemon.name}</h4>
      <ul className="item__type">{types}</ul>
    </article>
  );
};

export default Pokemon;
