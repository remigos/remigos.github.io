import React from 'react'
import {homeObjOne} from './Data'
import {InfoSection, InfoOne, InfoTwo, InfoThree, Reviews, Chat, Market } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoOne />
            <InfoTwo />
            <InfoThree />
            <Reviews/>
            <Chat/>
            <Market/>
        </> 
    )
}

export default Home
