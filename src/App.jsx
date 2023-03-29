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
  const [pokemonIndex, setCount] = useState(0);
  
  const nextPoke = () => {
    setCount(pokemonIndex + 1)
  }
  const prevPoke = () => {
    setCount(pokemonIndex - 1)
  }


  return (<div>
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/>

    <NavBar prevPoke={prevPoke} nextPoke= {nextPoke}/>
    

    </div>
    
  )
}
export default App
