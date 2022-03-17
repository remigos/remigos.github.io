import React from 'react'
import { Container } from '../../../../globalStyles'
import { RightContent, Image, ImageContainer, BottomContent } from '../../../commons/BuyerRealtor/Row/Row.elements'
import {motion} from 'framer-motion'
import {headerAnimation, imageAnimation} from '../../../../utils/Animation'
import {useScroll} from '../../../useScroll.jsx'
import { Button, Title, Text, LeftContent } from './InfoSection.elements'
const InfoSection = ({lightBg, imgStart, lightText,lightTextDesc, description,headline, start, img, alt}) => {

    const [element, controls] = useScroll();
    return (
        <Container ref={element} style={{paddingTop:'50px'}}>
            <BottomContent>
                <LeftContent>
                <motion.div animate={controls} variants={headerAnimation} transition={{ease: "easeOut", delay:0.2, stiffness:300}}> 
                    <Title>Elevate Home Shopping Through A Single Platform</Title>
                    <Text>Share properties and feedback both ways in a purpose built real estate solution.</Text>
                    <Button onClick={()=> window.open("https://app.remigo.com/", "_blank")}>Start your trial</Button>
                    </motion.div>
                </LeftContent>
            <motion.div animate={controls} variants={imageAnimation} transition={{ease: "easeOut", delay:0.4, stiffness:300}}> 
                <RightContent>
                <ImageContainer>
                    <Image src={img} alt="img"/>
                </ImageContainer>   
                 </RightContent>
            </motion.div>
            </BottomContent>
        </Container>
    )
}

export default InfoSection
