import React from 'react';
import project0 from "../../assets/img/0.png"
import project1 from "../../assets/img/1.png"
import project2 from "../../assets/img/2.png"
import project3 from "../../assets/img/3.png"
import project4 from "../../assets/img/4.png"

function Project({project, i}) {
    const {name, repo, deployment, description, tech, sampleGuest} = project;
    const projectImgs = [project0, project1, project2, project3, project4];
    return (
        <div className='m-auto' style={{ width: '30rem' }}>
            <img variant='top' src={projectImgs[i]} alt='Project screenshot' />
            <div>
                <div>{name}</div>
                <div>
                    {description}
                </div>
                <div>Technologies Used</div>
                <ul>
                    {tech.map((item) => (
                        <li className='border-0'>• {item}</li>
                    ))}
                </ul>
                {sampleGuest &&
                <>
                    <div>Guest Account Credentials</div>
                    <ul>
                        <li className='border-0'>• Username: {sampleGuest.username}</li>
                        <li className='border-0'>• Email: {sampleGuest.email}</li>
                        <li className='border-0'>• Password: {sampleGuest.password}</li>
                    </ul>
                </>
                }
                <button className='mt-3' variant='primary' href={repo} target='_blank'>Repository</button>
                <button className='mt-3 mx-3' variant='secondary' href={deployment} target='_blank'>Deployment</button>
            </div>
        </div>
    );
}

export default Project;