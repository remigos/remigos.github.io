import React from 'react'
import { Subtitle, Text, TopContent } from '../../../globalStyles.js'
import InfoOne from '../../../../images/About/Home.png'
import { Container, LeftContainer,Title, BottomContent, RightContainer, ImageContainer, BackgroundImage, Content } from './InfoOne.elements'
import Fade from 'react-reveal'
const InfoTwoRealtors = () => {
    return (
        <Container>
            <TopContent>
                <Title>Reimagine the way agents, buyers and sellers communicate about and share Real Estate.</Title>
            </TopContent>
            <Content>
            <BottomContent>
              <LeftContainer>
              <ImageContainer>
              <Fade left>   
                  <BackgroundImage src={InfoOne} alt="R-logo"/>
              </Fade>
              </ImageContainer>
          </LeftContainer>
                <RightContainer>
                    <Fade right>
                    <Subtitle>About Remigo</Subtitle>
                    </Fade>
                    <Fade right delay={300}>
                        <Text>Headquartered in Austin, TX, Remigo is a small team of tech developers, real estate tech advisors and entrepreneurs. We all experienced the frustration and disorganized back and forth that is home shopping. We recognized an opportunity to bring a solution that empowers REALTORS® and their clients to have a more enjoyable and efficient process.</Text>
                    </Fade>
              </RightContainer>
            </BottomContent>
            </Content>
        </Container>
    )
}

export default InfoTwoRealtors