import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projectObjects = [
        {
            name: 'Budget Tracker',
            description: 'This application is a budget tracker website. It uses IndexedDB for offline functionality, a service worker for interacting with the bdivser cache, and is also a Progressive Web Application. The website also uses a MongoDB database.',
            tech: ['Node.js','Express','MongoDB','IndexedDB','PWA'],
            repo: 'https://github.com/jciii91/budget-tracker-PWA',
            deployment: 'https://peaceful-falls-53457.herokuapp.com/'
        },
        {
            name: 'MTG Draft Bot',
            description: 'This website uses MongoDB as its database on the backend, and React as the frontend. Mongoose and GraphQL are employed to handle the models and queries necessary for serving the data required. Users can signup for an account to keep track of their recent drafts, or use the website with no account.',
            tech: ['Node.js', 'Apollo', 'GraphQL', 'Express', 'React', 'MongoDB'],
            repo: 'https://github.com/jciii91/MTG-Draft-Bot',
            deployment: 'https://tcgoutpost.com/'
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
            description: 'A simple calendar application that allows a user to save events for each hour of the day. This app will run in the bdivser and feature dynamically updated HTML and CSS powered by jQuery.',
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
        <div className='flex-row justify-center'>
            {projectObjects.map((project, index) => (
                <div className='m-5'>
                    <Project 
                        project = {project}
                        key = {project.name}
                        i = {index}
                    ></Project>
                </div>
            ))}
        </div>
    );
}
export default Portfolio;