//Componente principal que maneja el estado y la lógica principal de la aplicación.

import React, { useEffect, useState } from 'react';
import CharacterList from './componentes/CharacterList'; // Asegúrate de que la ruta sea correcta
import './App.css';

/*Definición del componente APP
useState([]): Declara una variable de estado llamada characters y una 
función setCharacters para actualizarla, inicializándola como un arreglo 
vacío.
useEffect(...): Ejecuta una función después de que el componente se monte
 (similar a componentDidMount en componentes de clase). La función hace 
 una llamada a la API de Rick and Morty para obtener los datos de los 
 personajes y actualiza el estado con los resultados.*/
function App() {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);
  
  /*Renderiza un contenedor <div> con una clase CSS App.
    Muestra un encabezado <h1>.
    Renderiza el componente CharacterList, pasando el estado characters
    como una prop llamada characters. */
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;


