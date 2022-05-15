import React from 'react';

function Navigation({sectionSelected, setSectionSelected}) {
    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={ () => setSectionSelected('about') }>About Me</a>
                </li>
                <li className="mx-2">
                    <a href="#portfolio" onClick={ () => setSectionSelected('portfolio') }>Portfolio</a>
                </li>
                <li className="mx-2">
                    <a href="#contact" onClick={ () => setSectionSelected('contact') }>Contact</a>
                </li>
                <li className="mx-2">
                    <a href="/">Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;