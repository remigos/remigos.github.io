import React from 'react'
import { Container, TopContainer, BottomContainer, Title, Subtitle, Card, Icon, Text, CardsContainer} from './InfoThree.elements'
import home from '../../../../assets/Icon/Home.png'
import share from '../../../../assets/Icon/Share.png'
import checks from '../../../../assets/Icon/Checks.png'
import SimpleSlider from './Carousel'
import {motion} from 'framer-motion'
import {fromUp} from '../../../../utils/Animation'
import {useScroll} from '../../../useScroll.jsx'

const InfoThree = () => {
    const [element, controls] = useScroll();

    return (
        <Container ref={element}>
            <TopContainer>
            <motion.div animate={controls} variants={fromUp} transition={{ease: "easeOut", stiffness:300}}>
                <Title>What Remigo Does For You</Title>
            </motion.div>
            </TopContainer>
            <BottomContainer>
                <CardsContainer>
                <motion.div animate={controls} variants={fromUp} transition={{ease: "easeOut", delay:0.2,stiffness:300}}>       
                <Card>
                    <Icon src={home} alt="home"/>
                    <Subtitle>Market updates</Subtitle>
                    <Text>Receive property updates in real time, keep listings organized, and be ready to jump on your dream home immediately.</Text>
                </Card>
                </motion.div>
                <motion.div animate={controls} variants={fromUp} transition={{ease: "easeOut", delay:0.4, stiffness:300}}>       
                <Card>
                    <Icon src={share} alt="share"/>
                    <Subtitle>Property sharing</Subtitle>
                    <Text>Property sharing like you’ve never seen it. Share feedback and comments both ways and build a better shopping experience for everyone.</Text>
                </Card>
                </motion.div>
                <motion.div animate={controls} variants={fromUp} transition={{ease: "easeOut", delay:0.6, stiffness:300}}>       
                <Card>
                    <Icon src={checks} alt="checks"/>
                    <Subtitle>Listing feedback</Subtitle>
                    <Text>Feedback is made quick and easy with comments, ratings and questions directly on properties and details. Keep communication...</Text>
                </Card>
                </motion.div>
                </CardsContainer> 
               <SimpleSlider />
            </BottomContainer>

        </Container>
    )
}

export default InfoThree
