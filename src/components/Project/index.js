import React from 'react';

function Project({project, index}) {
    const {name, repo, deployment} = project;
    const classId = 'project' + index;
    return (
        <section>
            <img alt='project' className={classId}/>
            <div className='projectDiv'>
                <h4>
                    {name}
                </h4>
                <a href={repo} target="_blank" rel="noreferrer">
                    Repository
                </a>
                <a href={deployment} target="_blank" rel="noreferrer">
                    Deployment
                </a>
            </div>
        </section>
    );
}

export default Project;