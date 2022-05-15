import React from 'react';
import profilePicture from "../../assets/img/profilePhoto.jpg"

function About() {
    return (
        <div className='aboutMe'>
            <div>
                <h2>About Me</h2>
            </div>
            <div>
                <img alt='John Costello' src={profilePicture}/>
            </div>
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum minima explicabo enim necessitatibus praesentium consequuntur, ea cumque eum consequatur porro aspernatur iste perspiciatis reiciendis eius dignissimos animi unde aliquam eveniet.</p>
            </div>
        </div>
    );
}

export default About;