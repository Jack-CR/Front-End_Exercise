import React from 'react'
import { Navbar, Container, Image } from 'react-bootstrap'


export const NavBar = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container fluid className="d-flex justify-content-center">
               {/*  <Navbar.Brand href="#"> */}
                    <Image src="img/pokemonimg.png"  fluid/>
              {/*   </Navbar.Brand> */}
            </Container>
        </Navbar>
    )
}

export default NavBar