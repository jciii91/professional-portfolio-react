import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Project({project}) {
    const {name, repo, deployment} = project;
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant='top' src='' />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant='primary' href={repo} target='_blank'>Repository</Button>
                <Button variant='secondary' href={deployment} target='_blank'>Deployment</Button>
            </Card.Body>
        </Card>
    );
}

export default Project;