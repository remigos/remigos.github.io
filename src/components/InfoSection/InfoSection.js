import React, {useEffect} from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Image,SignUpText, ObjectMain } from './InfoSection.elements'
import {Container} from '../../globalStyles'
import Forms from '../Form/Form'
import gsap from "gsap";
import Objects from '../../assets/Object.png'
import Iphone from '../../assets/iphone_info_section.png'
//import {FormEmail} from '../Form/FormEmailJS'

const lightBg = false;
const lightText = true;

const InfoSection = () => {
    useEffect(() => {      

        gsap.fromTo('.hero',{opacity:0, y:300 }, {opacity: 1 , y: -50 , duration: 1.5 });

    }, []);
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                <ObjectMain src={Objects} alt="object png"/>

                    <InfoRow imgStart='' className='hero'>
                    <InfoColumn>
                        <TextWrapper>
                            <Heading lightText={lightText}>Coming soon!</Heading>
                            <Subtitle lightTextDesc={lightText}>Reimaging the way Agents, Buyers and Sellers to communicate about and share Real-Estate</Subtitle>
                            <SignUpText lightTextDesc={lightText}>SIGN UP FOR RELEASE DATES AND UPDATES.</SignUpText>
                            <Forms/>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start=''>
                            <Image src={Iphone} alt='iphone-img'/>
                        </ImgWrapper>
                    </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
