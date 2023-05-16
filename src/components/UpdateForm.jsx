import { useNavigate, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import React from 'react';

export default function UpdateForm() {  
  const [formInfo, setFormInfo] = useState({});  
  const navigate = useNavigate();
  const {_id} = useParams();

  useEffect(() => {
    if (_id) {
      fetch(`https://bite-buster-api.web.app/restaurants/${_id}`)
        .then(response => response.json())
        .then(data => setFormInfo(data))
        .catch(error => console.error(error));
    }
  }, [_id]);




  // handle Form
  /* *********************** */
  const handleForm = e => {
    e.preventDefault();

    const url = (_id) 
      ? `https://bite-buster-api.web.app/restaurants/${_id}` 
      : 'https://bite-buster-api.web.app/restaurants';
    
    const methodPathUsed = (_id) ? "PATCH" : "POST";

    const fetchData = async() => {          
      const res = await fetch(url, {        
        method: methodPathUsed,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formInfo),
      });
  
      const data = await res.json();
      setFormInfo(data);
      navigate("/homecrud");
    }

    fetchData().catch(err => console.error(err));
  }

  // handle Input Change
  /* *********************** */
  /* Before
    onChange={ e => setFormData( {...formData, qr: e.target.value} )}

    Now
    onChange={handleInputChange}
  */  
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormInfo( {...formInfo, [name]: value} );
  }
  
  return(
    <>
      <h2>Add Restaurant🍴{(_id) ? "Update" : "Add"}</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name"
          value={formInfo.name || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Info</label>
        <input 
          type="text" 
          name="info"
          value={formInfo.info || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Price</label>
        <input 
          type="text" 
          name="price"
          value={formInfo.price || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Address</label>
        <input 
          type="text" 
          name="address"
          value={formInfo.address || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Phone</label>
        <input 
          type="text" 
          name="phone"
          value={formInfo.phone || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Website</label>
        <input 
          type="text" 
          name="website"
          value={formInfo.website || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Day</label>
        <input 
          type="text" 
          name="day"
          value={formInfo.day || ""}
          onChange={handleInputChange} />

        <br />

      

        <label htmlFor="name">Image</label>
        <input 
          type="text" 
          name="image"
          value={formInfo.image || ""}
          onChange={handleInputChange} />


        <br />
        
        <button 
          type="submit"
          onClick={ e => handleForm(e)}>{(_id) ? "Update" : "Add"}</button>
      
      </form>
    </>
  )
}