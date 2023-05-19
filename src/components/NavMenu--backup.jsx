
import { Navbar,Container,Image, Row, Col} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';





export default function NavMenu () {

  const imgUri = process.env.PUBLIC_URL

    return (

  <Navbar>
    <Container className="nav-bar">

        <Navbar.Brand href="/"><i className="bi bi-house-door-fill" fill=".bg-white"></i></Navbar.Brand>
        <Image className= "image-logo"src={`${imgUri}/images/BIte.png`} /><h1 className="title-font">BUSTER</h1>
        <br />
        <Row>
          <Col>
        <p className="p-font">•FORT LAUDERDALE</p>
          </Col>
        </Row>
        <Row>
          <Col>
        <p className="p-font">•POMPANO BEACH</p>
          </Col>
        </Row>
    </Container>
  </Navbar>  

    )
}



 

       
  

         