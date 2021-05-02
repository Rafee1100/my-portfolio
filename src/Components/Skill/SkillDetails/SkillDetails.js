import React from 'react';
import { Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './SkillDetails.css'

const SkillDetails = (props) => {
    const { name, progress } = props.data;
    return (
        <Col md={5} className="mb-5 p-4 bar-style">
            <div className="d-flex justify-content-between pb-3">
                <h5 className="text-white">{name}</h5>
                <h5 className="text-white">{progress}%</h5>
            </div>
            <ProgressBar className="bar" animated variant="success" now={progress} />
        </Col>
    );
};

export default SkillDetails;