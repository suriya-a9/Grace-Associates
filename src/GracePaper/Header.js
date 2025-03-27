import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css";

function PaperHeader() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <a href="/">
                        <img src={"assets/logo-new.webp"} alt="logo" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Our Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#bio">Biodegradable Bags</NavDropdown.Item>
                            <NavDropdown.Item href="#sos">
                                SOS Bags
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#professional">Professional Bags</NavDropdown.Item>
                            <NavDropdown.Item href="#customized">
                                Customized Bags
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#shopping">
                                Shopping Bags
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#gift">
                                Gift Bags
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#aboutus">About Us</Nav.Link>
                        {/* <Nav.Link href="#contact">Contact Us</Nav.Link> */}
                        <button className="header-contact-button" onClick={() => (window.location.hash = "contact")}>Contact</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PaperHeader;