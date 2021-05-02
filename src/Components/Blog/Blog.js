import React from 'react';
import { Container, Row } from 'react-bootstrap';
import blogData from '../../Data/blogData'
import ServiceDetail from '../Services/ServiceDetail/ServiceDetail';


const Blog = () => {
    return (
        <Container>
        <div className="mt-5 mb-3">
              <h1 className="heading-style text-center">My Recent Blogs</h1>
          </div>
          <Row>
          {
              blogData.map(data=><ServiceDetail data={data} key={data.id}/>)
          }
         </Row>
    </Container>
    );
};

export default Blog;