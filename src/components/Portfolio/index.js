import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Project from '../Project';

function Portfolio() {
    const projectObjects = [
        {
            name: 'Budget Tracker',
            description: 'This application is a budget tracker website. It uses IndexedDB for offline functionality, a service worker for interacting with the browser cache, and is also a Progressive Web Application. The website also uses a MongoDB database.',
            tech: ['Node.js','Express','MongoDB','IndexedDB','PWA'],
            repo: 'https://github.com/jciii91/budget-tracker-PWA',
            deployment: 'https://peaceful-falls-53457.herokuapp.com/'
        },
        {
            name: 'Space Launch',
            description: 'As space travel enthusiasts we created an application that tracks space launches. The user has two formats of launch selections: date selection, or a list of the next 10 launches.',
            tech: ['HTML', 'CSS', 'Javascript', 'Materialize', 'jQuery', 'Mapquest API', 'The SpaceDevs API'],
            repo: 'https://github.com/jciii91/space-launch',
            deployment: 'https://jciii91.github.io/space-launch/'
        },
        {
            name: 'Book Search Engine',
            description: 'This project uses the full MERN stack to create a search engine for books using Googles API. Users can create accounts, log in and out, search for books and save books they find to be viewed later. Any user can search but you must be signed in to save books.',
            tech: ['Apollo', 'GraphQL', 'Express', 'React', 'MongoDB', 'Google Books API'],
            sampleGuest: {username: 'guest', email: 'guest@guest.guest', password: 'password123'},
            repo: 'https://github.com/jciii91/book-search-engine',
            deployment: 'https://young-everglades-13808.herokuapp.com/'
        },
        {
            name: 'Work Day Scheduler',
            description: 'A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.',
            tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Moment.js'],
            repo: 'https://github.com/jciii91/workday-scheduler',
            deployment: 'https://jciii91.github.io/workday-scheduler/'
        },
        {
            name: 'Weather Dashboard',
            description: 'Uses the OpenWeather One Call API to retrieve weather data for cities. Weather Dashboard will show current information for the searched city as well as the 5 day forecast. There is also a search history which persists between pageloads. Clicking on a previously searched city will pull its current weather data and its 5 day forecast.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'OpenWeather One Call API'],
            repo: 'https://github.com/jciii91/weather-dashboard',
            deployment: 'https://jciii91.github.io/weather-dashboard/'
        }
    ];

    return (
        <Row className='g-4'>
            {projectObjects.map((project, index) => (
                <Col>
                    <Project 
                        project = {project}
                        key = {project.name}
                        i = {index}
                    ></Project>
                </Col>
            ))}
        </Row>
    );
}
export default Portfolio;