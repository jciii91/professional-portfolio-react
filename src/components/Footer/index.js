import React from 'react';

function Footer() {
    return (
        <section>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="https://www.linkedin.com/in/john-costello-iii-0360a486/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </li>
                    <li className="mx-2">
                        <a href="https://github.com/jciii91" target="_blank" rel="noreferrer">Github</a>
                    </li>
                    <li className="mx-2">
                        <a href="https://stackoverflow.com/users/14711443/john" target="_blank" rel="noreferrer">Stack Overflow</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Footer;