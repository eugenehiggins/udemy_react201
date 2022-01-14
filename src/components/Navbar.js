import {Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const CustomNavBar = ({searchText, setSearchText}) => {
    const updateSearchText = (e) => {
        console.log(e.target.value)
    }
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="/">Movie Browser</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                    </Nav>
                    <Nav className="ml-auto">
                        <Form>
                            <Form.Group className="" controlId="formSearchInput">
                                <Form.Control
                                    type="text"
                                    placeholder="Search..."
                                    aria-label="Search"
                                    // value={searchText}
                                    onChange={updateSearchText}
                                />
                            </Form.Group>
                        </Form>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchText}
                            onChange={updateSearchText}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNavBar;