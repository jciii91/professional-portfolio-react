import React from 'react';
import resume from '../../assets/documents/resume.pdf'
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

function Resume() {
    const skills = [
        'JavaScript ES6+',
        'CSS3',
        'HTML5',
        'SQL',
        'NoSQL',
        'GitHub',
        'MongoDB',
        'MySQL',
        'GraphQL',
        'Progressive Web Applications',
        'Express.js',
        'React',
        'Node.js',
        'Handlebars',
        'jQuery',
        'Bootstrap',
        'Global States',
        'JSON Web Tokens'
    ]

    let windowSize = window.innerWidth;

    return (
        <>
            <Row className='text-center mb-4'>
                <a href={resume} style={{ fontSize: '2rem'}}>Click here to download my resume</a>
            </Row>
            <Row className='text-center mb-4'>
                <h3>Technical Skills</h3>
            </Row>
            {windowSize > 900 && 
                <Row className='g-2 m-4 justify-content-center'>
                        {skills.map((skill) => (
                            <Col xs={3} className='text-center m-3'>
                                {skill}
                            </Col>
                        ))}
                </Row>
            }
            {windowSize <= 900 && 
                <Row className='m-4 justify-content-center'>
                    <ListGroup>
                        {skills.map((skill) => (
                            <ListGroupItem className='text-center'>
                                {skill}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Row>
            }
        </>
    );
}

export default Resume;