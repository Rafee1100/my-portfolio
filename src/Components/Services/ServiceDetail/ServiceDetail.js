import React from 'react';
import { Col } from 'react-bootstrap';
import './ServiceDetail.css'

const ServiceDetail = (props) => {
    const { title, img, description } = props.data
    return (
        <Col md={4}>
            <div className="service-style">
                <div>
                    <img className="service-img-style" height="300" src={img} alt="" />
                </div>
                <div className="text-center text-white">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    );
};

export default ServiceDetail;