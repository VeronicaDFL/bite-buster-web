import { useNavigate } from "react-router-dom"
import { Col, Image } from "react-bootstrap"
import React from "react";


export default function RestaurantsCard({isAdmin, handleDelete, restaurant:{_id,name,price,info,address,phone,image, website, maplink}}) {

    const navigate = useNavigate()

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
                        src={`/images/${image}`} />
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
                <p>{maplink 
                    ? (<a href={maplink} target="_blank"><button>
                        <img src={`/images/icon-google-map.png`} style={{width: "15px", height: "22px", marginRight: "5px"}} />Google Maps</button></a>) 
                    : (null)}
                </p>
            </Col>
        </>
    )
}
                

                     
                