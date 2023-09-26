import React from 'react'
import Homeimg from './image/web-developer.jpg';
import Common from './Common';


const Home = () => {
    return (
        <>
            <Common name='Improve Your Skill.' name2="Fullfill Your Dream" imgSrc={Homeimg} pelm='We are the  team of talented developer for making website.' btn='Get Started' visit='/service' />
        </>
    )
}

export default Home