import React from 'react'
import Common from './Common';
import img from './image/about.jpg';

const About = () => {
    return (
        <>
            <Common name='Welcome to my About.' pelm='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut.' imgSrc={img} btn='Contact' visit='/contact' />
        </>
    )
}

export default About