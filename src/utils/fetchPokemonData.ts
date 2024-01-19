import PokemonData from '@/interfaces/PokemonData';

async function getPokemonData(id: number): Promise<PokemonData> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
    const data = await response.json();

    const pokemon: PokemonData = {
        name: data.name,
        types: data.types.map((item: { type: { name: string } }) => item.type.name),
        sprite: data.sprites.front_default
    }
    return pokemon
}

export default async function getPokedexData(numberOfPokemons: number = 151) {

    try {
        const pokemonsData: PokemonData[] = []

        for (let i = 1; i <= numberOfPokemons; i++) {
            pokemonsData.push(await getPokemonData(i))
        }

        return pokemonsData
    } catch (error) {
        return { message: 'Error fetching Pokemons data' }
    }
}
