import React from 'react';
import profilePicture from "../../assets/img/profilePhoto.jpg"

function About() {
    return (
        <>
            <div className='flex-row'>
                <div className='col-2 text-center vert-align'>
                    <img className='vert-align' alt='John Costello' src={profilePicture}/>
                </div>
                <div className=' flex-row col-10 pt-2'>
                    <p >I am a full stack web developer using my experiences as an electrical engineer to develop new solutions on the web. I recently earned a certificate in full stack development from Rutgers University, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. I am known as an innovative problem solver, creating unique and intuitive experiences for all users. I applied aspects of UX and agile development in a recent project. I worked in a team of four to develop a single-page MERN app that functions as a storefront for a small business, allowing users to bdivse and purchase various wares. My ability to learn new technologies quickly and problem solve effectively make me an excellent addition to any team.</p>
                </div>
            </div>
        </>
    );
}

export default About;