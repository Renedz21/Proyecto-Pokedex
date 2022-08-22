import React, { useState, useEffect } from 'react'
import Pokedex from '../components/Pokedex'
import SearchBar from '../components/SearchBar'
import { ThreeCircles } from 'react-loader-spinner'

import { getPokemons, getPokemon } from '../lib/data'
import Navbar from '../components/Navbar'

const Home = () => {
    const [pokemon, setPokemon] = useState([])
    const [page, setPage] = useState(0)
    const [total, setTotal] = useState()
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)

        const fetchPokemons = async () => {

            const data = await getPokemons(30, 30 * page);

            const promises = data.results.map(async (item) => {
                return await getPokemon(item.url)
                    .then(pokemonData => pokemonData)
                    .catch(err => console.log(err));
            });

            const results = await Promise.all(promises);
            setPokemon(results)
            setLoading(false)
            setTotal(Math.ceil(data.count / 25))
        }
        fetchPokemons()
    }, [page])

    return (
        <div className='container mx-auto'>
            {/* <SearchBar searchPokemons={searchPokemons} /> */}
            <Navbar />
            <div className='p-3 md:p-0 my-4'>
                {loading ? (
                    <div className='w-full h-full grid items-center justify-items-center mt-56'>
                        <ThreeCircles
                            height="100"
                            width="100"
                            color="#4fa94d"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="three-circles-rotating"
                            outerCircleColor=""
                            innerCircleColor=""
                            middleCircleColor=""
                        />
                    </div>
                ) : (
                    <Pokedex
                        pokemon={pokemon}
                        page={page}
                        setPage={setPage}
                        total={total}
                    />
                )}
            </div>
        </div>
    )
}

export default Home