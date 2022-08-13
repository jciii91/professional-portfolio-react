import React from 'react';

function Navigation({sectionSelected, setSectionSelected}) {
    return (
        <nav>
            <ul horizontal className='flex-row justify-content-between no-bullets'>
                <li className='border-0'>
                    <a href="#about" className={`${sectionSelected === 'about' && 'activeSection'}`} onClick={ () => setSectionSelected('about') }>About Me</a>
                </li>
                <li className='border-0'>
                    <a href="#portfolio" className={`${sectionSelected === 'portfolio' && 'activeSection'}`} onClick={ () => setSectionSelected('portfolio') }>Portfolio</a>
                </li>
                <li className='border-0'>
                    <a href="#resume" className={`${sectionSelected === 'resume' && 'activeSection'}`} onClick={ () => setSectionSelected('resume') }>Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;