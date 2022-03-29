import React from 'react'
import { Container, Subtitle, Text, TopContent, Title } from '../../../../globalStyles.js'
import InfoOne from '../../../../assets/About/Home.png'
import {LeftContent, RightContent, Image, ImageContainer, BottomContent} from '../../../commons/BuyerRealtor/RowReverse/Row.elements'

const InfoTwoRealtors = () => {
    return (
        <Container>
            <TopContent>
                <Title>Reimagine the way agents, buyers and sellers communicate about and share Real Estate.</Title>
            </TopContent>
            <BottomContent>
                <LeftContent>
                    <ImageContainer>   
                        <Image src={InfoOne} alt="img" style={{maxWidth: "400px"}}/>
                    </ImageContainer>
                </LeftContent>
                <RightContent>
                    <Subtitle>About Remigo</Subtitle>
                    <Text>Headquartered in Austin, TX, Remigo is a small team of tech developers, real estate tech advisors and entrepreneurs. We all experienced the frustration and disorganized back and forth that is home shopping. We recognized an opportunity to bring a solution that empowers REALTORS® and their clients to have a more enjoyable and efficient process.</Text>
              </RightContent>
            </BottomContent>
        </Container>
    )
}

export default InfoTwoRealtors