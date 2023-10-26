import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/index'
import PokemonCard from '../components/PokemonCard'
import { Container, Grid } from '@mui/material';
import axios from "axios";
import { Api } from '@mui/icons-material';

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(()=> {
        getPokemons();
    }, [])

    const getPokemons = () => {
        var endpoints = [];
        for ( var i = 1; i<51; i++ ) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        return response;

    };

const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name===""){
        getPokemons();
    }
    for (var i in pokemons) {
        if (pokemons[i].data.name.includes(name)) {
            filteredPokemons.push(pokemons[i]);
        }
    }
    setPokemons(filteredPokemons);
}

    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false" justifyContent="space-between">
                <Grid container spacing={"3"}>
                    {pokemons.map((pokemon) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} >
                            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}