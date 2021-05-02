import React from 'react';
import { Col } from 'react-bootstrap';
import './ProjectDetails.css'

const ProjectDetails = (props) => {
    const{img,title,Description,github,live}=props.data;
    const style={
        textDecoration:'none',
        color:'white',
        fontWeight:500
    }
    return (
        <Col md={6} className="pb-3" >
            <div className="project-style">
            <div className=" d-flex justify-content-center align-items-center mt-2">
                <img className="img-style" height="300"  src={img} alt=""/>
            </div>
            <div className="text-center text-white">
                <h5>{title}</h5>
                <p>{Description}</p>
                <div className="pb-3">
                    <button className="btn btn-success mr-2">
                        <a style={style} href={github}>Github</a>
                    </button>
                    <button className="btn btn-success">
                        <a style={style} href={live}>Live Link</a>
                    </button>
                </div>
            </div>
            </div>
        </Col>
    );
};

export default ProjectDetails;