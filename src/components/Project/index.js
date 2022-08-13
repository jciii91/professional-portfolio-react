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
        <div className='m-auto card' style={{ width: '30rem' }}>
            <div>
                <img className='max-100' src={projectImgs[i]} alt='Project screenshot' />
            </div>
            <div>
                <div className='card-header'>{name}</div>
                <div className='card-body'>
                    {description}
                </div>
                <div>Technologies Used</div>
                <ul>
                    {tech.map((item) => (
                        <li className='border-0'>{item}</li>
                    ))}
                </ul>
                {sampleGuest &&
                <>
                    <div>Guest Account Credentials</div>
                    <ul>
                        <li className='border-0'>Username: {sampleGuest.username}</li>
                        <li className='border-0'>Email: {sampleGuest.email}</li>
                        <li className='border-0'>Password: {sampleGuest.password}</li>
                    </ul>
                </>
                }
                <div className='text-center pb-3'>
                    <a className='a-btn mt-3 p-2' href={repo} target='_blank' rel='noreferrer'>Repository</a>
                    <a className='a-btn mt-3 mx-3 p-2' href={deployment} target='_blank' rel='noreferrer'>Deployment</a>
                </div>
            </div>
        </div>
    );
}

export default Project;