import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import { Row, Container } from "react-bootstrap";
import TableComponent from "../Components/Table/TableComponent";
import FooterComponent from "../Components/Footer/FooterComponent";

export const IndexPage = () => {
  const [pokemons, setPokemons] = useState([]);

  /* Imake the request to the API */
  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

          /* Saving each result "name,stats,moves etc" from the API in a single object "pokemon" */
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
          base_experience: json.base_experience,
          weight: json.weight,
          stats: json.stats,
          sprites: json.sprites,
          abilities: json.abilities,
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
          <TableComponent pokemons={pokemons} />
        </Row>
        <FooterComponent /> 
      </Container>
    </>
  );
};

export default IndexPage;
