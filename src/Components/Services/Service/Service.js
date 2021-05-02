import React from 'react';
import { Container, Row } from 'react-bootstrap';
import serviceData from '../../../Data/ServiceData'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {
    return (
      <Container>
          <div className="mt-5 mb-3">
                <h1 className="heading-style text-center">My Set of Speciality</h1>
                <br/>
            </div>
            <Row>
            {
                serviceData.map(data=><ServiceDetail data={data} key={data.id}/>)
            }
           </Row>
      </Container>
    );
};

export default Service;