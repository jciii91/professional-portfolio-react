import React from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import project0 from "../../assets/img/0.png"
import project1 from "../../assets/img/1.png"
import project2 from "../../assets/img/2.png"
import project3 from "../../assets/img/3.png"
import project4 from "../../assets/img/4.png"

function Project({project, i}) {
    const {name, repo, deployment, description, tech, sampleGuest} = project;
    const projectImgs = [project0, project1, project2, project3, project4];
    return (
        <Card style={{ width: '30rem' }}>
            <Card.Img variant='top' src={projectImgs[i]} alt='Project Image' />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Title>Technologies Used</Card.Title>
                <ListGroup>
                    {tech.map((item) => (
                        <ListGroupItem className='border-0'>• {item}</ListGroupItem>
                    ))}
                </ListGroup>
                {sampleGuest &&
                <>
                    <Card.Title>Guest Account Credentials</Card.Title>
                    <ListGroup>
                        <ListGroupItem className='border-0'>• Username: {sampleGuest.username}</ListGroupItem>
                        <ListGroupItem className='border-0'>• Email: {sampleGuest.email}</ListGroupItem>
                        <ListGroupItem className='border-0'>• Password: {sampleGuest.password}</ListGroupItem>
                    </ListGroup>
                </>
                }
                <Button className='mt-3' variant='primary' href={repo} target='_blank'>Repository</Button>
                <Button className='mt-3 mx-3' variant='secondary' href={deployment} target='_blank'>Deployment</Button>
            </Card.Body>
        </Card>
    );
}

export default Project;