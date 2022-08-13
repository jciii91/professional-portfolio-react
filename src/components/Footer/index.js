import React from 'react';

function Footer() {
    return (
        <footer className='bg-secondary my-4 py-2 flex-row align-center'>
            <div className='container flex-row justify-center align-center'>
                <nav>
                    <ul horizontal className='flex-row no-bullets'>
                        <li className='border-0 px-5'>
                            <a href="https://www.linkedin.com/in/john-costello-iii-0360a486/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </li>
                        <li className='border-0 px-5'>
                            <a href="https://github.com/jciii91" target="_blank" rel="noreferrer">Github</a>
                        </li>
                        <li className='border-0 px-5'>
                            <a href="https://stackoverflow.com/users/14711443/john" target="_blank" rel="noreferrer">Stack Overflow</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;