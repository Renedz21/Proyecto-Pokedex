import React from 'react'

const Stats = ({ pokemonStats }) => {
    return (
        <div>
            <h1 className='my-3 font-semibold text-2xl'>Stats</h1>
            <div className='flex gap-2 flex-col'>
                {pokemonStats && pokemonStats.map((item, index) => (
                    <div key={index} className='flex items-center gap-2'>
                        <h1 className='capitalize flex-auto w-full'>{item.stat.name}</h1>
                        <span>{item.base_stat}</span>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: `${item.base_stat}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Stats