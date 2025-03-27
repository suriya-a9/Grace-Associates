import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

function GraceHeader() {
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
                        {/* <Nav.Link href="/">Home</Nav.Link> */}
                        <Nav.Link href="#industries">Our Industries</Nav.Link>
                        <Nav.Link href="#aboutus">About Us</Nav.Link>
                        {/* <Nav.Link href="#contact">Contact Us</Nav.Link> */}
                        <button className="header-contact-button" onClick={() => (window.location.hash = "contact")}>Contact</button>
                    </Nav>
                    {/* <button className="offers-button">
            <img src={"assets/images/Vector.webp"} alt="offers" />
            <span className="button-span">Offers</span>
          </button> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default GraceHeader;