import React from 'react'
import Navbar from '../components/Navbar/index'
import PokemonCard from '../components/PokemonCard'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <PokemonCard />
        </div>
    )
}