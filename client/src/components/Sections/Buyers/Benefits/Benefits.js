import React from 'react'
import { Container, TopContainer, Title, Subtitle, Card, Icon, Text, CardsContainer, BottomContainer, Content} from './Benefits.elements'
import Com from '../../../../images/Icon/communication.png'
import HomeSearch from '../../../../images/Icon/HomeSearch.png'
import HomeList from '../../../../images/Icon/HomeList.png'
import Shop from '../../../../images/Icon/Shop.png'
import Catalog from '../../../../images/Icon/catalog.png'
import Fade from 'react-reveal';
import SimpleSlider from './Carousel'


const Benefits = () => {

    return (
        <Container>
            <TopContainer>
                <Title>Buyer Benefits</Title>
            </TopContainer>
            <Content>
            <BottomContainer>
                <CardsContainer>
                <Fade bottom>       
                <Card>
                    <Icon src={Com} alt="Messages"/>
                    <Subtitle>Efficient communication</Subtitle>
                    <Text>Find, share and discuss properties through a platform designed for real estate. Remigo keeps conversations in one location. </Text>
                </Card>
                </Fade>
                <Fade bottom delay={300}>
                <Card>
                    <Icon src={HomeSearch} alt="Shop-homes"/>
                    <Subtitle>Shop for homes faster</Subtitle>
                    <Text>Communicate your needs and wants in a new home better with specific feedback on every listing. Provide updates to your search based on the properties you're seeing and find your dream home faster.</Text>
                </Card>
                </Fade>
                <Fade bottom delay={600}>
                <Card>
                    <Icon src={HomeList} alt="Hot-Listings"/>
                    <Subtitle>Jump on hot listings</Subtitle>
                    <Text>Hot markets mean that houses can sell in just a few days. Remigo can highlight properties that meet your specific desires and focus the conversation on the properties that really matter.</Text>
                </Card>
                </Fade>
                </CardsContainer>
                <CardsContainer>
                <Fade bottom delay={300}>       
                <Card>
                    <Icon src={Catalog} alt="Catalog"/>
                    <Subtitle>Catalog of shared properties</Subtitle>
                    <Text>Keep all of your shared homes in one location along with all of your comments, scores and feedback. Property groupings based on key details makes sorting easier and shopping faster.</Text>
                </Card>
                </Fade>
                <Fade bottom delay={600}>
                <Card>
                    <Icon src={Shop} alt="Shop"/>
                    <Subtitle>Enjoy real estate shopping </Subtitle>
                    <Text>It’s the biggest purchase of your life and you should enjoy the whole process. Remigo offers better organization, easier feedback and a single platform for all of the communication.</Text>
                </Card>
                </Fade>
                <Card></Card>
                </CardsContainer> 
               <SimpleSlider />
               </BottomContainer> 
               </Content>
        </Container>
    )
}

export default Benefits
