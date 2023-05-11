import { Link } from "react-router-dom";
import { Navbar,Container,Nav ,Row, Col} from "react-bootstrap";



export default function Footer () {

    return (

      <Navbar>
      <Container className="text-bg-success">
       <Row>
        <p>Let us know if you busted a new spot</p>
        <Nav>
          <Nav.Item>
              <Nav.Link as={Link} to="/email">Email <i class="bi bi-mailbox"></i></Nav.Link>
          </Nav.Item>
        </Nav>
       </Row>
      </Container>
   </Navbar>  
       )
   }
       
     

    
      
