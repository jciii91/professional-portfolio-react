import React from 'react';

function Navigation({sectionSelected, setSectionSelected}) {
    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" className={`${sectionSelected === 'about' && 'activeSection'}`} onClick={ () => setSectionSelected('about') }>About Me</a>
                </li>
                <li className="mx-2">
                    <a href="#portfolio" className={`${sectionSelected === 'portfolio' && 'activeSection'}`} onClick={ () => setSectionSelected('portfolio') }>Portfolio</a>
                </li>
                <li className="mx-2">
                    <a href="#contact" className={`${sectionSelected === 'contact' && 'activeSection'}`} onClick={ () => setSectionSelected('contact') }>Contact</a>
                </li>
                <li className="mx-2">
                    <a href="/">Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;