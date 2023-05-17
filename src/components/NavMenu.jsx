
import { Navbar,Container,Image} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';





export default function NavMenu () {

  const imgUri = process.env.PUBLIC_URL

    return (

  <Navbar>
    <Container className="text-bg-primary">

        <Navbar.Brand href="/"><i className="bi bi-house-door-fill" fill=".bg-white"></i></Navbar.Brand>
        <Image className= "image-logo"src={`${imgUri}/images/BIte.png`} /><h1 className="title-font">BUSTER</h1>
        <br />
        <p className="p-font">Fort Lauderdale</p>
       
     
    
      <DropdownButton id="dropdown" title={ <span>
            <i className="bi bi-list"></i> 
        </span>}>
         <Dropdown.Item href="/about">About</Dropdown.Item>
         <Dropdown.Item href="/adminlogin">Admin Login</Dropdown.Item>
      </DropdownButton>
    </Container>
  </Navbar>  

    )
}



 

       
  

         