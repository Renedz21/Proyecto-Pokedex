import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardDetail from '../components/CardDetail'

import { ThreeCircles } from 'react-loader-spinner'


const PokemonDetail = () => {

    const [pokemonDetails, setPokemonDetails] = useState([])
    const [eggGroup, setEggGroup] = useState([])
    const [loading, setLoading] = useState(false)
    const { pokemonId } = useParams()

    useEffect(() => {
        setLoading(true)
        const fetchPokemonDetail = async () => {
            const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                .then(res => res.json())
                .then(data => data)
                .catch(err => console.log(err));

            setPokemonDetails(pokemonData)
            setLoading(false)
        }
        fetchPokemonDetail()
    }, [pokemonId])




    return (
        <div className={``}>
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
                <CardDetail
                    pokemonDetails={pokemonDetails}
                />
            )}
        </div>
    )
}

export default PokemonDetail