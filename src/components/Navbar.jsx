import React from 'react'
import logo from '../img/logo-pokemon.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-center my-4'>
            <img className='object-cover w-56 h-auto md:w-full md:max-w-sm' src={logo} alt="" />
        </div>
    )
}

export default Navbar