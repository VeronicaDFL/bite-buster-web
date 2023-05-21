
import { Container,Row,Col } from 'react-bootstrap';
import React, { useRef,useState } from 'react';
import emailjs from 'emailjs-com';



    const EmailForm = () => {
    const form = useRef();
    const [isEmailSent, setEmailSent] = useState(false)
        
    const sendEmail = (e) => {
      e.preventDefault(); // prevents the page from reloading when you hit “Send”
        
    emailjs
      .sendForm('service_151anut', 'template_e1iivs2', form.current, 'MOhQa88odA1vzL3rn')
      .then((result) => {
      setEmailSent(true)  //set state to indicate email sent
      })

      .catch((error) =>{
        console.error("Error sending email",error);
      })
      };
      
      return (

    <Container>
        <Row>
            <Col className= "email">
            <div>
         {isEmailSent ? (
          <p>Email has been succesfully sent😎!Thank You!</p>
         ) : (      
             <form className= "unit" ref={form} onSubmit={sendEmail}>
             <label></label>
                    <input className="unit" placeholder="Name" type="text" name="user_name" />
             <label></label>
                    <input  className="unit" placeholder="Email"type="email" name="user_email" />
             <label></label>
                    <input className="unit" placeholder="Your Message Here..." name="message" />
                    <button  type="submit" value="Send">Send</button>
             </form>
             )}
           </div>
           </Col>
           </Row>
     </Container>
         );
        };
         
        export default EmailForm;





        
            

    
