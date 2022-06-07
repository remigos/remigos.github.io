import React from 'react'
import { Container, TopContainer, BottomContainer, Title, Subtitle, Card, Icon, Text, CardsContainer} from './InfoThree.elements'
import home from '../../../../images/Icon/Home.png'
import share from '../../../../images/Icon/Share.png'
import checks from '../../../../images/Icon/Checks.png'
import SimpleSlider from './Carousel'
import Fade from 'react-reveal/Fade';

const InfoThree = () => {

    return (
        <Container>
            <TopContainer>
            <Fade top>
                <Title>What Remigo Does For You</Title>
            </Fade>
            </TopContainer>
            <BottomContainer>
                <CardsContainer>
                <Fade bottom delay={100}>       
                <Card>
                    <Icon src={home} alt="home"/>
                    <Subtitle>Market updates</Subtitle>
                    <Text>Receive property updates in real time, keep listings organized, and be ready to jump on your dream home immediately.</Text>
                </Card>
                </Fade>
                <Fade bottom delay={300}>       
                <Card>
                    <Icon src={share} alt="share"/>
                    <Subtitle>Property sharing</Subtitle>
                    <Text>Property sharing like you’ve never seen it. Share feedback and comments both ways and build a better shopping experience for everyone.</Text>
                </Card>
                </Fade>
                <Fade bottom delay={500}>       
                <Card>
                    <Icon src={checks} alt="checks"/>
                    <Subtitle>Listing feedback</Subtitle>
                    <Text>Feedback is made quick and easy with comments, ratings and questions directly on properties and details. Keep communication...</Text>
                </Card>
                </Fade>
                </CardsContainer> 
               <SimpleSlider />
            </BottomContainer>

        </Container>
    )
}

export default InfoThree