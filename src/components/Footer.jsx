import { Link } from "react-router-dom";
import { Navbar,Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";




export default function Footer () {
  const navigate = useNavigate()
  
  const gotoEmailForm = () => {
    navigate(`/email`)
  }

    return (

      <Navbar>
      <Container className="footer" expand="lg" >
              <h4>Let us know if you busted a new spot!</h4>
              <button onClick={gotoEmailForm}>Email</button>

              {/* <footer>
              <p>&copy;Veronica De Felice{currentYear}</p>
              </footer> */}

      </Container>
     </Navbar>  
       )
   }
     
        
   
     
         
        
       
     

    
      
