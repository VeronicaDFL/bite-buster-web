import { useNavigate } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import React from "react";

export default function RestaurantsCard({
  isAdmin,
  handleDelete,
  restaurant: {
    _id,
    name,
    price,
    info,
    address,
    phone,
    image,
    website,
    maplink,
  },
}) {
  const navigate = useNavigate();

  console.log({ isAdmin });

  const gotoForm = () => {
    navigate(`/form`);
  };

  return (
    <>
      <Col
        xs={11}
        md={5}
        lg={4}
        xl={6}
        className="mb-3 text-center text-xl-end restaurant-image"
      >
        <figure
          className="d-flex 
                    justify-content-center
                    justify-content-xl-end"
        >
          <div>
            <Image fluid className="rounded-3" src={`/images/${image}`} />
            {isAdmin && (
             
                <div className="card-buttons">
                  <button onClick={() => handleDelete(_id)}>Delete</button>
                  <button onClick={gotoForm}>Add</button>
                </div>
            
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
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!4v1684799634094!6m8!1m7!1sCAoSK0FGMVFpcE4yLVFvYnNNNGhhSnlJVUdKcmtmZ0F5dTlHXy0xZ1RhVjhkNTg.!2m2!1d26.39797883829105!2d-80.13499822090989!3f5.682190515086575!4f-15.061167193170718!5f0.7820865974627469"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <p>
          {maplink ? (
            <a href={maplink} target="_blank">
              <button>
                <img
                  src={`/images/icon-google-map.png`}
                  style={{ width: "15px", height: "22px", marginRight: "5px" }}
                />
                Google Maps
              </button>
            </a>
          ) : null}
        </p>
      </Col>
    </>
  );
}
