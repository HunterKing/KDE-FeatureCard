import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar} from "react-bootstrap";
import React from "react";

export const NavigationBar = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Example Title</Navbar.Brand>
                    <Nav>
                        <Nav.Link as={NavLink} to="/Home">
                            Home
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/Test">
                            Test
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/PostGet">
                            API Queries
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
};