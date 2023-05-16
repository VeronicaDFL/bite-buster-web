import { useNavigate } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import React from "react";


export default function RestaurantsCard( 
    {isAdmin, handleDelete,
        //importing the prop from Homecrud
        restaurant:{_id,name,price,info,address,phone,image, website,day}}) {
    const navigate = useNavigate();

    console.log({isAdmin})

    const gotoForm = () => {
        navigate(`/form`)
    }
      
    


    return(
    <div className ="restaurant-card">
        <Container>
            <Row>
                <Col>
                    <img src={image} alt="" />
                    <h2>11111{name}</h2>
                    <h3>{price}</h3>
                    <h4>{info}</h4>
                    <p>{address}</p>
                    <p>{phone}</p>
                    <p>{website}</p>
                    <p>{day}</p>

                     
                    <p>🏈{isAdmin}</p>
                    {/* {isAdmin && (
                    <> */}
                    <button onClick={ () => handleDelete(_id) }>Delete</button>
                    <button onClick={gotoForm}>Add</button>
                   
                    {/* </>
                    )} */}
                </Col>
            </Row>
        </Container>
    </div>
    )
}