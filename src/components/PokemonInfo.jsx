import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const PokemonInfo = ({ pokemonInfo }) => {

    return (
        <Link to={`/pokemon/${pokemonInfo.id}`}>
            <div className={`shadow-lg h-full rounded-lg bg-${pokemonInfo.types[0].type.name}`}>
                <div className='flex items-center justify-between py-2 px-4'>
                    <h2 className='text-xl font-bold capitalize  '>{pokemonInfo.name}</h2>
                    <p className=' font-semibold text-sm'>#00{pokemonInfo.id}</p>
                </div>

                <div className='flex items-center justify-between p-2'>
                    <div className='flex flex-col gap-2 justify-start'>
                        {pokemonInfo.types.map((type, index) => (
                            <span key={index}
                                className={`font-semibold  px-3 py-1 capitalize text-sm rounded-full bg-light-${type.type.name}`}>
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                    {/* <p className="bg-light-normal">hola</p> */}
                    <img
                        className='object-cover w-[92px]'
                        src={pokemonInfo.sprites.other.dream_world.front_default} alt="" />
                </div>
            </div>
        </Link>

    )
}

export default PokemonInfo