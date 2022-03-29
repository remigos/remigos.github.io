import React from 'react'
import { Container, TopContainer, BottomContainer, Title, Subtitle, Card, Icon, Icon1, Text, CardsContainer} from './InfoThree.elements'
import Focus from '../../../../assets/Icon/Focus.png'
import Light from '../../../../assets/Icon/Light.png'
import LightHome from '../../../../assets/Icon/LightHome.png'
import SimpleSlider from './Carousel'
const InfoThree = () => {

    return (
        <Container>
            <TopContainer>
                <Title>Our company values</Title>
            </TopContainer>
            <BottomContainer>
                <CardsContainer>       
                <Card>
                    <Icon1 src={Focus} alt="home"/>
                    <Subtitle>Service focused</Subtitle>
                    <Text>Remigo is all about bringing parties together into a more organized and effective way. We strive to provide the best service to our clients so that in turn, they can provide the best service to theirs. Good service builds a bond.</Text>
                </Card>
                <Card>
                    <Icon src={Light} alt="share"/>
                    <Subtitle>Problem solving</Subtitle>
                    <Text>We value a problem solving mentality not just in our product but how we approach our clients as well. Always be learning and rising to the next challenge.</Text>
                </Card>
                <Card>
                    <Icon src={LightHome} alt="checks"/>
                    <Subtitle>Client first</Subtitle>
                    <Text>While there are hurdles to overcome, the Remigo team focuses on client experiences to design a platform that can grow and evolve to meet the needs of our clients and provide them with the best solution possible.</Text>
                </Card>
                </CardsContainer> 
               <SimpleSlider />
            </BottomContainer>

        </Container>
    )
}

export default InfoThree
