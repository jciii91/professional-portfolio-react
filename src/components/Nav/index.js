import React from 'react';

function Nav() {
    return (
        <header className="flex-row">
            <h3 className='my-2'>
                <a href='/'>
                    John Costello
                </a>
            </h3>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About Me</a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="mx-2">
                        <a href="/">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;