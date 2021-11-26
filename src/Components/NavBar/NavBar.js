import React from 'react'
import { Navbar, Container } from 'react-bootstrap'


export const NavBar = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar