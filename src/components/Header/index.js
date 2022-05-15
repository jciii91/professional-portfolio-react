import React from 'react';
import Navigation from '../Navigation'

function Header() {
    return (
        <header className="flex-row">
            <h3 className='my-2'>
                <a href='/'>
                    John Costello
                </a>
            </h3>
            <Navigation></Navigation>
        </header>
    );
}

export default Header;