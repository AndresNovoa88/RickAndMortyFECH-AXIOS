//Componente que muestra los detalles adicionales de un personaje cuando se solicita.

/* Muestra el origen, la ubicación y la imagen del personaje.
Mapea sobre el arreglo character.episode y para cada episodio renderiza 
un elemento <li>, asignando una key única usando el índice del mapeo. */

import React from 'react';

function CharacterDetails({ character }) {
  if (!character) return null;

  return (
    <div className="character-details">
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
      <img src={character.image} alt={character.name} />
      <h3>Episodes</h3>
      <ul>
        {character.episode.map((episode, index) => (
          <li key={index}>{episode}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterDetails;


