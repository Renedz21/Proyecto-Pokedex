import React from 'react'
import Detail from './Detail'

const CardDetail = ({ pokemonDetails, eggGroup }) => {

    return (
        <div className='container mx-auto md:p-0 p-4'>
            <div className='flex items-center justify-between'>
                <div className=''>
                    <h1 className='capitalize text-2xl font-bold'>{pokemonDetails.name}</h1>
                    <div className='flex gap-6'>
                        {pokemonDetails.types && pokemonDetails.types.map((item, index) => (
                            <span key={index} className='rounded-full my-2 border border-indigo-400 px-4 py-1 capitalize'>{item.type.name}</span>
                        ))}
                    </div>
                </div>
                <p className='text-gray-600 text-xl font-semibold'>#00{pokemonDetails.id}</p>
            </div>

            <div className='grid justify-items-center my-4' >
                <img className='object-cover w-56' src={pokemonDetails.sprites && pokemonDetails.sprites.other.dream_world.front_default} alt="" />
            </div>

            <div className="w-full h-full shadow-lg border border-gray-300 rounded-lg p-4">
                <div className="card-header">

                </div>
                {/* CARD BODY */}
                <div className="w-full">
                    <Detail eggGroup={eggGroup} pokemonDetails={pokemonDetails} />
                </div>
            </div>
        </div>
    )
}

export default CardDetail