import React, { useState, useEffect } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { Row, Container } from 'react-bootstrap'
import TableComponent from '../Components/Table/TableComponent'
import FooterComponent from '../Components/Footer/FooterComponent'

export const IndexPage = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const getPokemons = async (url) => {
            let res = await fetch(url),
                json = await res.json();
           
            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                    json = await res.json();
  
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                    base_experience: json.base_experience,
                    moves:json.moves,
                    stats:json.stats,
                    sprites:json.sprites,
                    abilities:json.abilities
                };
            //console.log(json)
               console.log(pokemon)
                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        };

        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, []);

    return (
        <>
            <NavBar />
            <Container>
                <Row className="d-flex justify-content-center mt-5">
                    <TableComponent pokemons={pokemons} />
                </Row>
            </Container>
            <FooterComponent />
        </>
    )
}

export default IndexPage