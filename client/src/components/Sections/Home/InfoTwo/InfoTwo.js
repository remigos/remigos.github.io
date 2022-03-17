import React from 'react'
import { Container, LeftContainer, RightContainer, Title, Subtitle, ImageContainer, BackgroundImage, Image } from './InfoTwo.elements'
import Mockups from '../../../../assets/Home/Mockups.png'
import bg2 from '../../../../assets/Home/bg2.png'
import {motion} from 'framer-motion'
import {reveal, textAnimation} from '../../../../utils/Animation'
import {useScroll} from '../../../useScroll.jsx'

const InfoOne = () => {
    const [element, controls] = useScroll();

    return (
        <Container ref={element}>
            <LeftContainer>
                 <motion.div animate={controls} variants={reveal} transition={{ease: "easeOut", delay:0.4, stiffness:300}}> 
                <Title>A better real estate experience as a buyer & seller</Title>
                </motion.div>
                <motion.div animate={controls} variants={reveal} transition={{ease: "easeIn", delay:0.3, stiffness:300}}> 
                <Subtitle>
                Remigo provides the best real estate experience for buyers and sellers through modern chat solutions, property grouping and an interface optimized across all devices.
                </Subtitle>
                </motion.div>
                <motion.div animate={controls} variants={reveal} transition={{ease: "easeIn", delay:0.2, stiffness:300}}> 
                <Subtitle>
                Buyers can start building out their first saved searches,  view properties as well as receive updates via email and text when new listings hit the market. 
                </Subtitle>
                </motion.div>
                <motion.div animate={controls} variants={reveal} transition={{ease: "easeIn", delay:0.1, stiffness:300}}> 
                <Subtitle>
                Remigo takes it a step further and provides new and faster methods for sharing property feedback directly on listings. Respond in seconds on Remigo and speed up the entire real estate journey.
                </Subtitle>
                </motion.div>
            </LeftContainer>
            <motion.div animate={controls} variants={textAnimation} transition={{ease: "easeOut", duration: 0.3,stiffness:300}}>
            <RightContainer>
                <ImageContainer>
                    <BackgroundImage src={bg2} alt="Bg"/>
                    <Image src={Mockups} alt="img"/>
                </ImageContainer>
            </RightContainer>
            </motion.div>
        </Container>
    )
}

export default InfoOne
