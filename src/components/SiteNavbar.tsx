import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const SiteNavbar: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Eric Dong
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}>
                        <Nav.Link href="#action1">About</Nav.Link>
                        <Nav.Link href="#action2">Projects</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default SiteNavbar;