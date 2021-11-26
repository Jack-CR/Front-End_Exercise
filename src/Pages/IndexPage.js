import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { Row, Container } from 'react-bootstrap'

export const IndexPage = () => {
    const [pokemon, setPokemons] = useState([])

    useEffect(() => {
        const getPokemons = async (url) => {
            let res = await fetch(url),
                json = await res.json();
            //console.log(json);

            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                    json = await res.json();

                console.log(json);
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                };

                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        };

        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, []);


    return (
        <>
            <NavBar />
            <Container>
                <Row>

                </Row>
            </Container>
        </>
    )
}

export default IndexPage