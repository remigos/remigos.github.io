import React from 'react'
import {homeObjOne,homeObjTwo,homeObjThree} from './Data'
import {InfoSection, About, SharedProperties, Feedback, Contact} from '../../components';
const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <About {...homeObjTwo}/>
            <SharedProperties {...homeObjThree}/>
            <Feedback/>
            <Contact/>
        </>
    )
}

export default Home
