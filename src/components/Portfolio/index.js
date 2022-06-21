import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Project from '../Project';

function Portfolio() {
    const projectObjects = [
        {
            name: 'Budget Tracker',
            description: '',
            tech: [],
            sampleGuest: {},
            repo: 'https://github.com/jciii91/budget-tracker-PWA',
            deployment: 'https://peaceful-falls-53457.herokuapp.com/'
        },
        {
            name: 'Space Launch',
            description: '',
            tech: [],
            sampleGuest: {},
            repo: 'https://github.com/jciii91/space-launch',
            deployment: 'https://jciii91.github.io/space-launch/'
        },
        {
            name: 'Upscale Delivery',
            description: '',
            tech: [],
            sampleGuest: {},
            repo: 'https://github.com/FernandoMoreno1/Project-2',
            deployment: 'https://upscale-delivery.herokuapp.com/'
        },
        {
            name: 'Note Taker',
            description: '',
            tech: [],
            sampleGuest: {},
            repo: 'https://github.com/jciii91/note-taker',
            deployment: 'https://mysterious-spire-35262.herokuapp.com/'
        },
        {
            name: 'Weather Dashboard',
            description: '',
            tech: [],
            sampleGuest: {},
            repo: 'https://github.com/jciii91/weather-dashboard',
            deployment: 'https://jciii91.github.io/weather-dashboard/'
        }
    ];

    return (
        <Row className='g-4'>
            {projectObjects.map((project) => (
                <Col>
                    <Project 
                        project = {project}
                        key = {project.name}
                    ></Project>
                </Col>
            ))}
        </Row>
    );
}
export default Portfolio;