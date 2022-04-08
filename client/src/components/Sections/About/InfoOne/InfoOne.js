import React from 'react'
import { Subtitle, Text, TopContent } from '../../../../globalStyles.js'
import InfoOne from '../../../../assets/About/Home.png'
import { BottomContent} from '../../../commons/BuyerRealtor/RowReverse/Row.elements'
import { Container, LeftContainer,Title, RightContainer, ImageContainer, BackgroundImage } from './InfoOne.elements'
import Fade from 'react-reveal'
const InfoTwoRealtors = () => {
    return (
        <Container>
            <TopContent>
                <Title>Reimagine the way agents, buyers and sellers communicate about and share Real Estate.</Title>
            </TopContent>
            <BottomContent>
                <RightContainer>
                    <Fade right>
                    <Subtitle>About Remigo</Subtitle>
                    </Fade>
                    <Fade right delay={300}>
                        <Text>Headquartered in Austin, TX, Remigo is a small team of tech developers, real estate tech advisors and entrepreneurs. We all experienced the frustration and disorganized back and forth that is home shopping. We recognized an opportunity to bring a solution that empowers REALTORS® and their clients to have a more enjoyable and efficient process.</Text>
                    </Fade>
              </RightContainer>
              <LeftContainer>
              <ImageContainer>
              <Fade left>   
                  <BackgroundImage src={InfoOne} alt="img" style={{maxWidth: "400px"}}/>
              </Fade>
              </ImageContainer>
          </LeftContainer>
            </BottomContent>
        </Container>
    )
}

export default InfoTwoRealtors