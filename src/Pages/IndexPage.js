import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { Row, Container, Col } from 'react-bootstrap'
import CardComponent from '../Components/Card/CardComponent'
import SpinnerLoading from '../Components/Loading/SpinnerLoading'

export const IndexPage = () => {
    const [pokemons, setPokemons] = useState([])

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
                <Row className="d-flex justify-content-center mt-5">
                    {pokemons.length === 0
                        ? <Col>
                            <SpinnerLoading />
                        </Col>
                        : pokemons.map((el, key) => {
                            return (
                                <Col key={key}>
                                    <CardComponent pokemon={el} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default IndexPage