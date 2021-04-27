import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const{name, image, info} = props.service
    return (
        <div className="col-md-4 mt-3 d-md-flex">
            <Card className="service-card ">
                <Card.Img variant="top" src={image} className="service-card-img" />
                <Card.Body className="pt-0 bg-none">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {info}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCard;