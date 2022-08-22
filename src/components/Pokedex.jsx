import React from 'react'
import Pagination from './Pagination'
import PokemonInfo from './PokemonInfo'

const Pokedex = ({ pokemon, page, setPage, total }) => {

    const lastPage = () => {
        const lastPageMax = Math.max(page - 1, 0);
        setPage(lastPageMax);
    }

    const nextPage = () => {
        const nextPageMin = Math.min(page + 1, total);
        setPage(nextPageMin);
    }

    return (
        <>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-6 md:my-6'>
                {pokemon.map((item, index) => (
                    <PokemonInfo key={index} pokemonInfo={item} />
                ))}
            </div>

            <Pagination
                onLeftClick={lastPage}
                onRightClick={nextPage}
                page={page + 1}
                totalPages={total}
            />
        </>
    )
}

export default Pokedex