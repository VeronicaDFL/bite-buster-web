import { useNavigate } from "react-router-dom"
import { Button, Col, Image } from "react-bootstrap"
import React from "react";


export default function RestaurantsCard({isAdmin, handleDelete, restaurant:{_id,name,price,info,address,phone,image, website,day}}) {

    const navigate = useNavigate()
    const imgUri = process.env.PUBLIC_URL

    console.log({isAdmin})

    const gotoForm = () => {
        navigate(`/form`)
    }
      

    return(
        <>
            <Col xs={11} md={5} lg={4} xl={6}  
                className="mb-3 text-center text-xl-end restaurant-image">
                <figure className="d-flex 
                    justify-content-center
                    justify-content-xl-end">
                    <div>
                    <Image 
                        fluid
                        className="rounded-3" 
                        src={`${imgUri}/images/${image}`} />
                    {isAdmin && (
                    <>
                        <div className="card-buttons">
                        <button onClick={ () => handleDelete(_id) }>Delete</button>
                        <button onClick={gotoForm}>Add</button>
                        </div>
                    </>
                    )}
                    </div>
                </figure>
            </Col>

            <Col xs={10} md={6} lg={7} xl={6}>
                <h2>{name}</h2>
                <h3>{price}</h3>
                <p>{info}</p>
                <p>{address}</p>
                <p>{phone}</p>
                <p><a href={website} target="_blank" rel="noreferrer" >
                    <Button>Launch Site</Button></a></p>
            </Col>
        </>
    )
}
                

                     
                