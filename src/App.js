import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import PokemonDetail from './pages/PokemonDetail'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='pokemon/:pokemonId' element={<PokemonDetail />} />
    </Routes>

  )
}

export default App