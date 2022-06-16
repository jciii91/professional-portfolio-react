import React from 'react';
import Navigation from '../Navigation'
import { Row, Col } from 'react-bootstrap';

function Header({sectionSelected, setSectionSelected}) {
    return (
        <Row>
            <Col xs={12} md={4} lg={4} xl={4}>
                <h3 className='text-lg-start text-center'>
                    <a href='/'>
                        John Costello
                    </a>
                </h3>
            </Col>
            <Col xs={12} md={2} lg={2} xl={4}></Col>
            <Col xs={12} md={6} lg={6} xl={4}>
                <Navigation
                    sectionSelected = {sectionSelected}
                    setSectionSelected = {setSectionSelected}
                ></Navigation>
            </Col>
        </Row>
    );
}

export default Header;