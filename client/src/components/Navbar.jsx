import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imgLogo from '../assets/icons/person-fill-add.svg';
import Button from 'react-bootstrap/Button';


function NavScrollExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Nav.Link href="/">
        <Navbar.Brand>
          LenguageTecnology
        </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="html">HTML5</Nav.Link>
            <Nav.Link href="css">CSS3</Nav.Link>
            <Nav.Link href="js">JavaScript</Nav.Link>
            <Nav.Link href="information">Información</Nav.Link>
          </Nav>
          <Navbar bg="dark">
            <Container>
              <Nav.Link href="new">
                <Button variant="primary" size="lg" active>
                  Afiliate
                  <Navbar.Brand to="new">
                    <img
                      src={imgLogo}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </Navbar.Brand>
                </Button>{' '}
              </Nav.Link>
            </Container>
          </Navbar>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavScrollExample;
