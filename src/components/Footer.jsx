import { Link } from "react-router-dom";
import { Navbar,Container,Nav ,Row, Col} from "react-bootstrap";



export default function Footer () {

    return (

      <Navbar>
      <Container className="footer" expand="lg">
       <Row>
        <Nav>
          <Nav.Item>
              <p>Let us know if you busted a new spot!</p>
              <Nav.Link as={Link} to="/email">Email</Nav.Link>
          </Nav.Item>
        </Nav>
       </Row>
      </Container>
   </Navbar>  
       )
   }
       
     

    
      
