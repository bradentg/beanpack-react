
import logo from '../beanpack-logo.png'
import { HomePage } from './HomePage'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export const MainPage = () => {
    return (
        <div className="MainPage">
            <Navbar bg="light" expand="sm">
                <Container>
                <Navbar.Brand href="#home">BeanMC</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                    <Nav.Link  href="#home">Home</Nav.Link>
                    <Nav.Link href="#wiki">Wiki</Nav.Link>
                    <Nav.Link href="#modlist">Mod List</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <HomePage />
            </header>
        </div>
    )
}