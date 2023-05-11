import { Link } from "react-router-dom";
import { Navbar,Container,Nav } from "react-bootstrap";





export default function NavMenu () {

    return (

     <Navbar>
        <Container className="text-bg-primary">

        <Navbar.Brand href="/"><i className="bi bi-house"></i></Navbar.Brand>
        <h1>BITE🍴BUSTER</h1>
        <br />
        <p>Fort Lauderdale</p>

          <Nav>
            <Nav.Item>
                <Nav.Link as={Link} to="/about">About<i className="bi bi-list"></i></Nav.Link>
            </Nav.Item>
          </Nav>

        </Container>
     </Navbar>  
         

    )
}