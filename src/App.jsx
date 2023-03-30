import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar';
import './App.css'
import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setIndex] = useState(0);
  
  const setPoke = (index) => {
    setIndex(index);
  }
  


  return (<div>
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    {pokemonList.map((pokemon,index) => (
          <NavBar setPoke={() => setPoke(index)} key={index} name={pokemon.name}/>
    ))}

    </div>
    
  )
}
export default App
