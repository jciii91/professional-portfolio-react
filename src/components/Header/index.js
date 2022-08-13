import React from 'react';
import Navigation from '../Navigation'

function Header({sectionSelected, setSectionSelected}) {
    return (
        <header className='bg-secondary mb-4 py-2 flex-row align-center'>
            <div className='container flex-row pl-4 col-8 justify-space-between-lg justify-center align-center'>
                <h3>
                    <a href='/professional-portfolio-react'>
                        John Costello
                    </a>
                </h3>
            </div>
            <div className='col-4'>
                <Navigation
                    sectionSelected = {sectionSelected}
                    setSectionSelected = {setSectionSelected}
                ></Navigation>
            </div>
        </header>
    );
}

export default Header;