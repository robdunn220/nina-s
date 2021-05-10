import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "./nina's_3.svg";
import './App.css';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='light'>
                <Container>
                    <img
                        src={logo}
                        width="14%"
                        height="14%"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        id="logo"
                    />
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/about'>About</Nav.Link>
                            <Nav.Link href='/menu'>Menu</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;