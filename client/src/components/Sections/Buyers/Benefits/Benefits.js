import React from 'react'
import { Container, TopContainer, Title, Subtitle, Card, Icon, Text, CardsContainer, BottomContainer} from './Benefits.elements'
import Com from '../../../../assets/Icon/communication.png'
import HomeSearch from '../../../../assets/Icon/HomeSearch.png'
import HomeList from '../../../../assets/Icon/HomeList.png'
import Shop from '../../../../assets/Icon/Shop.png'
import Catalog from '../../../../assets/Icon/catalog.png'

import SimpleSlider from './Carousel'


const Benefits = () => {

    return (
        <Container>
            <TopContainer>
                <Title>Buyer benefits</Title>
            </TopContainer>
            <BottomContainer>
                <CardsContainer>       
                <Card>
                    <Icon src={Com} alt="Client"/>
                    <Subtitle>Efficient communication</Subtitle>
                    <Text>Find, share and discuss properties through a platform designed for real estate. Remigo keeps conversations in one location. </Text>
                </Card>
                <Card>
                    <Icon src={HomeSearch} alt="Deals"/>
                    <Subtitle>Shop for homes faster</Subtitle>
                    <Text>Communicate your needs and wants in a new home better with specific feedback on every listing. Provide updates to your search based on the properties you're seeing and find your dream home faster.</Text>
                </Card>
                <Card>
                    <Icon src={HomeList} alt="organization"/>
                    <Subtitle>Jump on hot listings</Subtitle>
                    <Text>Hot markets mean that houses can sell in just a few days. Remigo can highlight properties that meet your specific desires and focus the conversation on the properties that really matter.</Text>
                </Card>
                </CardsContainer>
                <CardsContainer>       
                <Card>
                    <Icon src={Catalog} alt="Client"/>
                    <Subtitle>Catalog of shared properties</Subtitle>
                    <Text>Keep all of your shared homes in one location along with all of your comments, scores and feedback. Property groupings based on key details makes sorting easier and shopping faster.</Text>
                </Card>
                <Card>
                    <Icon src={Shop} alt="Deals"/>
                    <Subtitle>Enjoy real estate shopping </Subtitle>
                    <Text>It’s the biggest purchase of your life and you should enjoy the whole process. Remigo offers better organization, easier feedback and a single platform for all of the communication.</Text>
                </Card>
                </CardsContainer> 
               <SimpleSlider />
               </BottomContainer> 
        </Container>
    )
}

export default Benefits
