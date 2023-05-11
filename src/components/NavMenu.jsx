
import { Navbar,Container} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';





export default function NavMenu () {

    return (

  <Navbar>
    <Container className="text-bg-primary">

        <Navbar.Brand href="/"><i className="bi bi-house-door-fill" fill=".bg-white"></i></Navbar.Brand>
        <h1>BITE🍴BUSTER</h1>
        <br />
        <p>Fort Lauderdale</p>
       
     
    
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



 

       
  

         