import resumeFile from 'assets/documents/Eric_Dong_Resume.pdf';
import React from 'react';

// components
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// icons
import { FileEarmarkPersonFill } from 'react-bootstrap-icons';

const SiteNavbar: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <a href={resumeFile} download="eric_dong_resume.pdf">
                        <FileEarmarkPersonFill
                            width={30}
                            height={30}
                            style={{marginRight: 10}}
                            className="d-inline-block align-top text-white"/>
                    </a>
                    Eric Dong
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}>
                        <Nav.Link href="#aboutMe">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#career">Career</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default SiteNavbar;