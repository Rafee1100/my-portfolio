import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import image from '../../../images/rafee.jpg'
import "./HeaderBody.css"

const HeaderBody = () => {
    const link = `https://drive.google.com/file/d/14aBQ_9YzmzG2t3RSqGrPgXPwO-8-NgzZ/view?usp=sharing`;
    const myStyle={
        textDecoration:'none',
        color:'white',
        fontWeight:500
    }
    return (
        <Container>
            <Row className="mt-5 pb-5 d-flex justify-content-between">
                <Col md={4} className=" mb-sm-4 mb-md-0">
                    <div className="self-info">
                        <h2 style={{ color: 'blue' }}>Hi,I am</h2>
                        <h1>Abdullah Al Rafee</h1>
                        <p>MERN Stack Developer</p>
                        <p>I am a Tech Enthusiastic. I believe hard work is the prerequisite of success. I am a software developer and continuous learner. Love to take challenges.
                            Started coding in the very early days of first year in university. Dream to work in google.</p>
                    </div>

                    <div className="icons mb-4">
                        <a href="https://www.facebook.com/abdullahal.rafee" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="icon" />
                        </a>

                        <a href="https://www.linkedin.com/in/abdullah-al-rafee-b4830b16b/" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="icon" />
                        </a>

                        <a href="https://github.com/Rafee1100" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faGithubSquare} size="2x" className="icon" />
                        </a>
                    </div>

                    <div>
                        <button className="btn btn-primary mr-3">
                        <FontAwesomeIcon icon={faDownload} className="mr-2" />
                            <a style={myStyle} href={link} download> Resume</a>
                        </button>
                        <button className="btn btn-primary">
                            <a style={myStyle}  href="https://www.linkedin.com/in/abdullah-al-rafee-b4830b16b/" rel="noopener noreferrer" target="_blank">
                                Hire Me
                            </a>
                        </button>
                    </div>
                </Col>
                <Col md={6} >
                    <img src={image} height="300" width="300" alt="" srcset="" className="d-flex justify-content-end profile-image" />
                </Col>
            </Row>
        </Container>

    );
};

export default HeaderBody;