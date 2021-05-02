import React from 'react';
import { Container, Row } from 'react-bootstrap';
import skillData from '../../../Data/SkillData'
import SkillDetails from '../SkillDetails/SkillDetails';

const Skill = () => {
    return (
       <Container>
            <div className="mt-5 mb-5">
                <h1 className="heading-style text-center">My Learing Progress</h1>
            </div>
            <Row className="d-flex justify-content-around"> 
           {
                skillData.map(data=><SkillDetails key={data.id} data={data} />)
           }
        </Row>
       </Container>
    );
};

export default Skill;