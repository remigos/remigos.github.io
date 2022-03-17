import React from 'react'
import { Container, LeftContainer, RightContainer, Title, Subtitle, ImageContainer, BackgroundImage, Image } from './InfoOne.elements'
import Bg from '../../../../assets/Home/bg1.png'
import Screen from '../../../../assets/Home/Screens1.png'
import {motion} from 'framer-motion'
import {revealReverse, textAnimation} from '../../../../utils/Animation'
import {useScroll} from '../../../useScroll.jsx'

const InfoOne = () => {

    const [element, controls] = useScroll();

    return (
        <Container ref={element}>
            <motion.div animate={controls} variants={textAnimation} transition={{ease: "easeOut",stiffness:300}}>
            <LeftContainer>
                <ImageContainer>
                    <BackgroundImage src={Bg} alt="Bg"/>
                    <Image src={Screen} alt="img"/>
                </ImageContainer>
            </LeftContainer>
            </motion.div>
                <RightContainer> 
                <motion.div animate={controls} variants={revealReverse} transition={{ease: "easeOut",delay:0.1, stiffness:300}}>
                    <Title>What is Remigo to Realtors</Title>
                </motion.div>
                <motion.div animate={controls} variants={revealReverse} transition={{ease: "easeOut", delay:0.2, stiffness:300}}>
                    <Subtitle>
                    Remigo is a better way to share and discuss properties with your clients. Provide the best home shopping experience to your clients with a focus on property feedback and organization to make decisions faster. 
                    </Subtitle>
               </motion.div>
               <motion.div animate={controls} variants={revealReverse} transition={{ease: "easeOut", delay:0.3, stiffness:300}}>
                    <Subtitle>
                    Register on Remigo as a real estate agent and start inviting clients right away. It’s free for buyers and sellers to join and there is no obligation to use Remigo.
                    </Subtitle>
                </motion.div>
                </RightContainer>
        </Container>
    )
}

export default InfoOne
