import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function Navigation({sectionSelected, setSectionSelected}) {
    return (
        <nav>
            <ListGroup horizontal className='justify-content-between'>
                <ListGroupItem className='border-0'>
                    <a href="#about" className={`${sectionSelected === 'about' && 'activeSection'}`} onClick={ () => setSectionSelected('about') }>About Me</a>
                </ListGroupItem>
                <ListGroupItem className='border-0'>
                    <a href="#portfolio" className={`${sectionSelected === 'portfolio' && 'activeSection'}`} onClick={ () => setSectionSelected('portfolio') }>Portfolio</a>
                </ListGroupItem>
                <ListGroupItem className='border-0'>
                    <a href="#resume" className={`${sectionSelected === 'resume' && 'activeSection'}`} onClick={ () => setSectionSelected('resume') }>Resume</a>
                </ListGroupItem>
            </ListGroup>
        </nav>
    );
}

export default Navigation;