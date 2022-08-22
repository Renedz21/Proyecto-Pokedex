import React, { useState, useEffect } from 'react'

const SearchBar = ({ searchPokemons }) => {

    const [search, setSearch] = useState('')

    return (
        <div className='mt-4 w-full flex items-center '>
            <input
                className='w-full py-2 px-4 border border-gray-300 rounded-md'
                type='text'
                placeholder='Buscar pokemon...'
                onChange={(e) => setSearch(e.target.value)} />
            <button className='border bg-indigo-600 rounded-md text-white p-2'
                onClick={() => searchPokemons(search)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
    )
}

export default SearchBar