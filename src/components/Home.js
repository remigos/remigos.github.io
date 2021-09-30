import React from 'react'
import {InfoSection, About, SharedProperties, Feedback, Contact} from './';
import "@fontsource/kanit/700.css"
import "@fontsource/inter"
import "@fontsource/lexend/700.css"
import "@fontsource/lexend"

const Home = () => {
    return (
        <>
            <InfoSection/>
            <About/>
            <SharedProperties/>
            <Feedback/>
            <Contact/>
        </>
    )
}

export default Home
