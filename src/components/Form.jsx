import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import React from 'react';

export default function Form() {  
  const [formInfo, setFormInfo] = useState({});  
  const navigate = useNavigate();

  // handle Form
  const handleForm = e => {
    e.preventDefault();

    const fetchData = async() => {          
      const res = await fetch("https://bite-buster-api.web.app/restaurants", {        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInfo),
      });
  
      const data = await res.json();
      setFormInfo(data);
      navigate("/homecrud");
    }

    fetchData().catch(err => console.error(err));
  }



  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormInfo( {...formInfo, [name]: value} );
  }
  
  return(
    <>
      <h2>Add Restaurant</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name"
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Info</label>
        <input 
          type="text" 
          name="info"
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Price</label>
        <input 
          type="text" 
          name="price"
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Address</label>
        <input 
          type="text" 
          name="address"
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Phone</label>
        <input 
          type="text" 
          name="phone"
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Website</label>
        <input 
          type="text" 
          name="website"
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Day</label>
        <input 
          type="text" 
          name="day"
          onChange={handleInputChange} />

        <br />

      

        <label htmlFor="name">Image</label>
        <input 
          type="text" 
          name="image"
          onChange={handleInputChange} />


        <br />
        
        <button 
          type="submit"
          onClick={ e => handleForm(e)}>Add</button>
      
      </form>
    </>
  )
}