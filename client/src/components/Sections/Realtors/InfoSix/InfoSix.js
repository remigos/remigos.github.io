import React from 'react'
import { Container, Subtitle, Text } from '../../../../globalStyles.js'
import InfoOne from '../../../../assets/Realtors/InfoSix.png'
import {LeftContent, RightContent, Image, ImageContainer, BottomContent } from '../../../commons/BuyerRealtor/RowReverse/Row.elements'

const InfoSixRealtors = () => {
    return (
        <Container>
            <BottomContent>
                <LeftContent>
                    <ImageContainer>   
                        <Image src={InfoOne} alt="img"/>
                    </ImageContainer>
                </LeftContent>
                <RightContent>
                    <Subtitle>How To Get Started</Subtitle>
                    <Text>Register on Remigo as a real estate agent and start inviting clients right away. It’s free for buyers and sellers to join and there is no obligation to continue using Remigo.</Text>
                    <Text>Once your client’s accept your invitation, by making an account on Remigo and accepting your request, you can start chatting and building out custom property searches.</Text>      
              </RightContent>
            </BottomContent>
        </Container>
    )
}

export default InfoSixRealtors