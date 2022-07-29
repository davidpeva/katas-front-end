import './header.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function Header( {handleForm, formText} ) {

    const refreshPage = () => { window.location.reload() }

    const handleRefresh = event => {
        event.preventDefault()
    }


    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark" className='height'>
                <Container fluid>
                    {/* aca revisar lo del onclick reload porque creo q lo puedo quitar con el to ya se refresca */}
                    <Navbar.Brand><Link to='/' className='home-logo' onClick='reload()' >Todo a 1000</Link></Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} snavbarscroll='true' >
                            <Nav.Link to='/' className='options' onClick={refreshPage} onSubmit={handleRefresh} >Home</Nav.Link>|{""}
                            <Nav.Link to='product-info' className='options'>Info Producto</Nav.Link>
                        </Nav>
                        <form >
                            <input
                                className='form-control-2 me-2'
                                type='search'
                                placeholder='Search'
                                aria-label='Search'
                                value={formText}
                                onChange={(e) => handleForm(e.target.value)}
                            />
                            <button type='button' className='btn btn-info'>Search</button>
                        </form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
