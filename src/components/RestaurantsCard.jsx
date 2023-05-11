import { Container, Row, Col } from "react-bootstrap"


export default function RestaurantCard({restaurant}) {

    return(
<div className ="restaurant-card">
    <Container>
        <Row>
            <Col>
         <img src={restaurant.image} alt="" />
         <h2>{restaurant.name}</h2>
         <h3>{restaurant.price}</h3>
         <h4>{restaurant.info}</h4>
         <p>{restaurant.address}
<br/>
   {restaurant.phone}
<br/>
   {restaurant.website}
         </p>
            </Col>
         </Row>
    </Container>

</div>
    )
}