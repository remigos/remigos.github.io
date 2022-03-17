import React from 'react'
import {homeObjOne} from './Data'
import {InfoSection, InfoOne, InfoTwo, InfoThree, Reviews, Chat, Market } from '../../components';
import {motion} from 'framer-motion';

const Home = () => {
    return (
        <motion.div initial="hidden" animate="show">
            <InfoSection {...homeObjOne}/>
            <InfoOne />
            <InfoTwo />
            <InfoThree />
            <Reviews/>
            <Chat/>
            <Market/>
        </motion.div> 
    )
}

export default Home
