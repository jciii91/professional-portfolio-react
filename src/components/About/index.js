import React from 'react';
import { Row, Col } from 'react-bootstrap';
import profilePicture from "../../assets/img/profilePhoto.jpg"

function About() {
    return (
        <>
            <Row className='g-2 m-4 text-center'>
                <Col>
                    <img className='img-fluid' alt='John Costello' src={profilePicture}/>
                </Col>
            </Row>
            <Row>
                <p className='lh-lg'>I am a full stack web developer using my experiences as an electrical engineer to develop new solutions on the web. I recently earned a certificate in full stack development from Rutgers University, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. I am known as an innovative problem solver, creating unique and intuitive experiences for all users. I applied aspects of UX and agile development in a recent project. I worked in a team of four to develop a single-page MERN app that functions as a storefront for a small business, allowing users to browse and purchase various wares. My ability to learn new technologies quickly and problem solve effectively make me an excellent addition to any team.</p>
            </Row>
        </>
    );
}

export default About;