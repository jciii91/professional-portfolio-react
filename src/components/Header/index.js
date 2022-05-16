import React from 'react';
import Navigation from '../Navigation'

function Header({sectionSelected, setSectionSelected}) {
    return (
        <header className="flex-row">
            <h3 className='my-2 mx-2'>
                <a href='/'>
                    John Costello
                </a>
            </h3>
            <Navigation
                sectionSelected = {sectionSelected}
                setSectionSelected = {setSectionSelected}
            ></Navigation>
        </header>
    );
}

export default Header;