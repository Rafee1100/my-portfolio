import React from 'react';
import { Container, Row } from 'react-bootstrap';
import projectData from '../../../Data/projectData'
import ProjectDetails from '../ProjectDetails/ProjectDetails';

const Project = () => {
    return (
      <Container>
            <div className="mt-5 mb-3">
                <h1 className="heading-style text-center">My Latest Activities</h1>
            </div>
            <Row>
            {
                projectData.map(data=><ProjectDetails key={data.id} data={data}/>)
            }
        </Row>
      </Container>
    );
};

export default Project;