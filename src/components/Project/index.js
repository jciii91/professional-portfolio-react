import React from 'react';
import { Card, Button } from 'react-bootstrap';
import project0 from "../../assets/img/0.png"
import project1 from "../../assets/img/1.png"
import project2 from "../../assets/img/2.png"
import project3 from "../../assets/img/3.png"
import project4 from "../../assets/img/4.png"

function Project({project, i}) {
    const {name, repo, deployment} = project;
    const projectImgs = [project0, project1, project2, project3, project4];
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant='top' src={projectImgs[i]} alt='Project Image' />
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