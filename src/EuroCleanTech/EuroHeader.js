import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
// import "./Header.css";

function EuroHeader() {
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
                        <NavDropdown title="Our Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#water">Water Tank Cleaning</NavDropdown.Item>
                            <NavDropdown.Item href="#up">
                                Upholstery Cleaning
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#carpet">
                                Carpet Cleaning
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#floor">
                                Floor Cleaning
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#keeping">
                                House Keeping Services
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#painting">
                                House Painting Services
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#shift">
                                House Shifting Services
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

export default EuroHeader;