import { useNavigate } from "react-router-dom"
import { Container, Row, Col, Image } from "react-bootstrap"
import React from "react";


export default function RestaurantsCard({isAdmin, handleDelete, restaurant:{_id,name,price,info,address,phone,image, website,day}}) {

    const navigate = useNavigate()
    const imgUri = process.env.PUBLIC_URL

    console.log({isAdmin})

    const gotoForm = () => {
        navigate(`/form`)
    }
      
    


    return(
    <div className ="restaurant-card">
        <Container>
            <Row>
                <Col>
                    <Image src={`${imgUri}/images/${image}`} />
                    <h2>{name}</h2>
                    <h3>{price}</h3>
                    <h4>{info}</h4>
                    <p>{address}</p>
                    <p>{phone}</p>
                    <p>{website}</p>
                    <p>{day}</p>

                     
                
                    {isAdmin && (
                    <>
                    <button onClick={ () => handleDelete(_id) }>Delete</button>
                    <button onClick={gotoForm}>Add</button>
                   
                    </>
                    )}
                </Col>
            </Row>
        </Container>
    </div>
    )
}