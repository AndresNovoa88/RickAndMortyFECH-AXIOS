//Componente que muestra información básica de un personaje y permite mostrar más detalles.
/* useState(false): Declara una variable de estado showDetails y 
una función setShowDetails para actualizarla, inicializándola como false. */
import React, { useState } from 'react';
import CharacterDetails from './CharacterDetails';

function Character({ character }) {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="character">
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && <CharacterDetails character={character} />}
    </div>
  );
}

export default Character;

