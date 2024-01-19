import Card from "@/components/Card";
import HomeProps from "@/interfaces/HomeProps";
import getPokedexData from "@/utils/fetchPokemonData";
import { ChangeEvent, useState } from "react";

export async function getStaticProps() {
  const pokemonsData = await getPokedexData()

  return {
    props: {
      pokemonsData,
    },
  };
}

export default function Home({pokemonsData}:HomeProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState(pokemonsData);

  const handleSearch = (event:ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = pokemonsData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue)
    );

    setFilteredPokemons(filtered);
  };

  return (
    <>
      <header>
        <img className="logo" src="assets/logo.svg" alt="logo"></img>
      </header>

      <div className="search-bar">
          <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Pesquisar pokémon"></input>
          <button>
            <img className="search-btn" src="assets/search-btn.svg" alt="botão de pesquisa"></img>
          </button>
      </div>

      <div className="pokedex-title">
        <h1>Pokédex</h1>
      </div>

      <main>
        <div className="pokemons-list">
          {filteredPokemons.map((pokemon,index)=>(
            <Card key={index} name={pokemon.name} types={pokemon.types} sprite={pokemon.sprite}/>
          ))}
        </div>
      </main> 

      <footer>
        Com 💛 Enzo Magalhães. InfoJr UFBA 2023
      </footer>
    </>
  )
}
