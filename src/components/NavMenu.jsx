
import {Image} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const imgUri = process.env.PUBLIC_URL


function NavMenu() {
  return (
<Navbar className="bar" expand="lg" sticky="top" >
      <Container >
        <Navbar.Brand href="#home">
          <Image fluid
              src={`${imgUri}/images/logo-bite-buster.webp`}
              className="image-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse className="rounded-3"id="basic-navbar-nav ">
          
          <Nav className="ms-auto ">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Admin Login</Nav.Link>
            <Nav.Link href="/homecrud">Admin Page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>






    
  );
}

export default NavMenu;


























// export default function NavMenu () {

//   const imgUri = process.env.PUBLIC_URL

//     return (

//   <Navbar>
//     <Container className="nav-bar">

//         <Navbar.Brand href="/"><i className="bi bi-house-door-fill" fill=".bg-white"></i></Navbar.Brand>
//         <Image className= "image-logo"src={`${imgUri}/images/BIte.png`} /><h1 className="title-font">BUSTER</h1>
//         <br />
//         <Row>
//           <Col>
//         <p className="p-font">•FORT LAUDERDALE</p>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//         <p className="p-font">•POMPANO BEACH</p>
//           </Col>
//         </Row>
//     </Container>
//   </Navbar>  

//     )
// }



 

       
  

         