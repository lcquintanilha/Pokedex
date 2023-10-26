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
        for ( var i = 1; i<50; i++ ) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        return response;

    };
    return (
        <div>
            <Navbar />
            <Container maxWidth="false">
                <Grid container spacing={"3"}>
                    {pokemons.map((pokemon) => (
                        <Grid item xs={2}>
                            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}