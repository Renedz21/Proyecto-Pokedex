export const getPokemons = async (limit, offset) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err));
}

export const getPokemon = async (url) => {
    return await fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err));
}