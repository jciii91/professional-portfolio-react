import React from 'react';
import resume from '../../assets/documents/resume.pdf'

function Resume() {
    const skills = [
        'JavaScript ES6+',
        'CSS3',
        'HTML5',
        'SQL',
        'NoSQL',
        'GitHub',
        'MongoDB',
        'MySQL',
        'GraphQL',
        'Progressive Web Applications',
        'Express.js',
        'React',
        'Node.js',
        'Handlebars',
        'jQuery',
        'Bootstrap',
        'Global States',
        'JSON Web Tokens'
    ]

    let windowSize = window.innerWidth;

    return (
        <>
            <div className='text-center mb-4'>
                <a className='include-deco' href={resume} style={{ fontSize: '2rem'}}>Click here to download my resume</a>
            </div>
            <div className='text-center mb-4'>
                <h3>Technical Skills</h3>
            </div>
            {windowSize > 900 && 
                <div className='m-4'>
                        {skills.map((skill) => (
                            <div className='text-center m-3'>
                                {skill}
                            </div>
                        ))}
                </div>
            }
            {windowSize <= 900 && 
                <div className='m-4 justify-content-center'>
                    <ul>
                        {skills.map((skill) => (
                            <li className='no-bullets text-center'>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </>
    );
}

export default Resume;