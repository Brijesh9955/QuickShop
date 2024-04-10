import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { FaOpencart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div>

            {/* Header */}
            <Navbar expand="lg" className='p-0'>
                <Container fluid className='header'>
                    <Container>
                        <Row className='d-flex justify-content-center align-items-center'>
                            <div className='col-3 d-flex justify-content-center align-items-center'>
                                <Navbar.Brand href="/">
                                    <div className="col-md-12 text-center">
                                        <h3 className="animate-charcter mb-0">QuickShop</h3>
                                    </div>
                                </Navbar.Brand>
                            </div>
                            <div className="col-7 d-flex justify-content-end align-items-center">
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll" className='d-flexx justify-content-center'>
                                    <Nav className="my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                        <Link to='/' className='nav-link c-08'>Home</Link>
                                        <Link to='/cart' className='nav-link c-08'><FaOpencart className='me-2' />Cart</Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                            <div className="col-2 d-flex justify-content-end align-items-center">
                                <a href="/user" className='pe-3'>Create</a>
                                <a href="/signup">User</a>
                            </div>
                        </Row>
                    </Container>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header