import React from 'react';
import { ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <Row className='justify-content-center'>
            <Col md={6}>
                <nav>
                    <ListGroup horizontal className='justify-content-between'>
                        <ListGroupItem className='border-0'>
                            <a href="https://www.linkedin.com/in/john-costello-iii-0360a486/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </ListGroupItem>
                        <ListGroupItem className='border-0'>
                            <a href="https://github.com/jciii91" target="_blank" rel="noreferrer">Github</a>
                        </ListGroupItem>
                        <ListGroupItem className='border-0'>
                            <a href="https://stackoverflow.com/users/14711443/john" target="_blank" rel="noreferrer">Stack Overflow</a>
                        </ListGroupItem>
                    </ListGroup>
                </nav>
            </Col>
        </Row>
    );
}

export default Footer;