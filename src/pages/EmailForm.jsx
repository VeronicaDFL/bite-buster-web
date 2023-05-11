
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

             <div>
                {isEmailSent ? (
                    <p>Email has been succesfully sent😎!Thank You!</p>
                ) : (      

              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form>
                )}
              </div>
            );
           };
            
           export default EmailForm;


    
