import React from 'react'
import { Container, TopContainer, BottomContainer, Title, Subtitle, Card, Icon, Text, CardsContainer} from './Benefits.elements'
import Client from '../../../../assets/Icon/Clients.png'
import Deals from '../../../../assets/Icon/deals.png'
import Org from '../../../../assets/Icon/Organization.png'
import SimpleSlider from './Carousel'
import Fade from 'react-reveal'

const Benefits = () => {

    return (
        <Container>
            <TopContainer>
                <Title>Realtor benefits</Title>
            </TopContainer>
            <BottomContainer>
                <CardsContainer>  
                <Fade bottom delay={100}>            
                <Card>
                    <Icon src={Client} alt="Client"/>
                    <Subtitle>Gain more clients</Subtitle>
                    <Text>Efficiency in communication is appreciated by both sides and for the agent this means providing a better service and experience to their clients. </Text>
                </Card>
                </Fade>
                <Fade bottom delay={300}>            
                <Card>
                    <Icon src={Deals} alt="Deals"/>
                    <Subtitle>Close more deals</Subtitle>
                    <Text>Remigo cuts through the misunderstandings and back and forth, making for a better and faster home shopping experience </Text>
                </Card>
                </Fade>
                <Fade bottom delay={500}>            
                <Card>
                    <Icon src={Org} alt="organization"/>
                    <Subtitle>Effortless organization</Subtitle>
                    <Text>Keeping notes and feedback attached to properties provides a better, more convenient and professional experience for your clients.</Text>
                </Card>
                </Fade>
                </CardsContainer> 
               <SimpleSlider />
            </BottomContainer>

        </Container>
    )
}

export default Benefits
