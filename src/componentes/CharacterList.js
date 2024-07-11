//Componente que muestra una lista de personajes.

/* CharacterList recibe una prop characters, que es un arreglo de 
personajes. Cada personaje es un objeto con las propiedades id, name y 
species.
Mapea sobre el arreglo characters y para cada personaje renderiza un 
componente Character, pasando el personaje como una prop llamada 
character y asignando una key única usando character.id. */
import React from 'react';
import Character from './Character'; // Importa el componente Character

function CharacterList({ characters }) {
  return (
    <div>
      {characters.map(character => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;

