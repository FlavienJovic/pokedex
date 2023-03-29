import PokemonCard from './components/PokemonCard'
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
  const [pokemonIndex, setCount] = useState(0);
  
  const nextPoke = () => {
    setCount(pokemonIndex + 1)
  }
  const prevPoke = () => {
    setCount(pokemonIndex - 1)
  }


  return (<div>
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/>

  <div>
    <button onClick={prevPoke}>Précedent</button>
    <button onClick={nextPoke}>Suivant</button>
  </div>
    

    </div>
    
  )
}
export default App
