import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container,Row,Col,Button} from "react-bootstrap";
import RestaurantsCard from "./RestaurantsCard.jsx";
import React from "react";


export default  function HomeCrud () {
    const [myRestaurants, setMyRestaurants] = useState([])
    const [dayOfTheWeek, setDayOfTheWeek] = useState('monday')
    const navigate = useNavigate()
    const [isAdmin , setIsAdmin] = useState('blahgsydg')

    const gotoAdd = () => {   //////go to UpdateForm
    navigate("/updateform")
    }
    


    const getMyRestaurants = () => { 
        fetch(`https://bite-buster-api.web.app/restaurants/${dayOfTheWeek}`)
        .then(response => response.json())
        .then(setMyRestaurants)
        .catch(alert)
    }
    
    useEffect(() => {
    getMyRestaurants()},[dayOfTheWeek])



//DELETE
const handleDelete = async(_id) => {
  
  try {
    const response = await fetch(`https://bite-buster-api.web.app/restaurants/${_id}`, {//needs to be same route path for the DELETE method in API
        "method": "DELETE",//determins the exact route path to API
        "headers": {
          "Content-Type": "application/json"}
    });

    if (!response.ok) {
      throw new Error("Network error. Try again later.");
    }

    // const data = await response.json();
    // console.log(data);
    alert(`${_id} has been deleted successfully.`);
    
    // Invoke to get the updated list of records.
    getMyRestaurants();
  } catch (err) {
    console.error(err);
    alert("Error deleting record. Try again later.");
  }
};





return (

   <Container className="homecrud" >
    <Row>
      <Col sm={11}>
        <div className="buttons">
        <button  size="sm" onClick={() => setDayOfTheWeek('monday')}>Monday</button>
        <button size="sm" onClick={() => setDayOfTheWeek('tuesday')}>Tuesday</button>
        <button size="sm" onClick={() => setDayOfTheWeek('wednesday')}>Wednesday</button>
        <button size="sm" onClick={() => setDayOfTheWeek('thursday')}>Thursday</button>
        <button size="sm" onClick={() => setDayOfTheWeek('friday')}>Friday</button>
        {/* <button size="sm" onClick={() => setDayOfTheWeek('saturday')}>Saturday</button>
        <button size="sm" onClick={() => setDayOfTheWeek('sunday')}>Sunday</button> */}
        </div>
      </Col>
    </Row>
    
    <Row>
      <Col>
    <section className="restaurants-list">
   
   
      {(!myRestaurants)
      ?<h2>Loading ...</h2>
      : myRestaurants.map(restaurant => (
        <RestaurantsCard 
          key={restaurant._id} 
          isAdmin={isAdmin}
          handleDelete={handleDelete}
          restaurant={restaurant} />
        ))    
      }      
      </section>
        </Col>
       </Row>
      </Container>
)
}
 
      
      


