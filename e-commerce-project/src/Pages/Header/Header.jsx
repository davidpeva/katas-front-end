import React from 'react'
import './header.css'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';



export default function Header() {
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#" >Navbar scroll</Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}