import React from 'react';

function Project(project) {
    const {name, repo, deployment} = project;
    return (
        <div>
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
    );
}

export default Project;