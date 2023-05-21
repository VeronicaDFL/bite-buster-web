
import { Container,Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React from "react";




export default function Footer () {

  const currentYear = new Date().getFullYear()

  const navigate = useNavigate()
  
  const gotoEmailForm = () => {
    navigate(`/email`)
  }

    return (

      
      <Container className="footer rounded-4" expand="lg" sticky="bottom" >
        <Row className="container-fluid">
           
              <button  onClick={gotoEmailForm}>LET US KNOW IF YOU BUSTED A NEW SPOT!  <i class="bi bi-envelope-at"></i></button>
        </Row>

            
        <Row>
              <p className="text-center">&copy;Veronica De Felice {currentYear}</p>
        </Row>
          

      </Container>
   
       )
   }
     
        
   
     
         
        
       
     

    
      
