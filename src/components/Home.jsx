import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantsCard.jsx";

export default  function Home () {
    const [myRestaurants, setMyRestaurants] = useState()
    const [dayOfTheWeek, setDayOfTheWeek] = useState('monday')

    const getMyRestaurants = () => { 
        fetch(`https://bite-buster-api.web.app/restaurants/${dayOfTheWeek}`)
        .then(response => response.json())
        .then(setMyRestaurants)
        .catch(alert)
    }
    useEffect(() => {
    getMyRestaurants()
},[dayOfTheWeek])


return (

    <>
    <div className="buttons">
    <button onClick={() => setDayOfTheWeek('monday')}>Monday</button>
    <button onClick={() => setDayOfTheWeek('tuesday')}>Tuesday</button>
    <button onClick={() => setDayOfTheWeek('wednesday')}>Wednesday</button>
    <button onClick={() => setDayOfTheWeek('thursday')}>Thursday</button>
    <button onClick={() => setDayOfTheWeek('friday')}>Friday</button>
    <button onClick={() => setDayOfTheWeek('saturday')}>Saturday</button>
    <button onClick={() => setDayOfTheWeek('sunday')}>Sunday</button>
    </div>
      
      <section className="restaurants-list">

      {(!myRestaurants)
      ?<h2>Loading ...</h2>
      : myRestaurants.map(restaurant => (
      <RestaurantCard 
      key={restaurant.id} restaurant={restaurant}/>
          ))
        }
          
      </section> 
      
        </>
)
}
 
      
      


