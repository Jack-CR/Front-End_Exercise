import React from 'react'
import { Navbar, Container, Image } from 'react-bootstrap'


export const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container fluid className="d-flex justify-content-center">
                    <Image src="img/pokemonimg.png"  fluid/>
            </Container>
        </Navbar>
    )
}

export default NavBar