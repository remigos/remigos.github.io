import React from 'react';
import {Contactsection, MainContent, ImageContainer, SkydiverImage, TextContainer, Title,Text, SubText} from './Contact.elements';
import Formtesting from '../Form/Formtesting'
import skydiver from '../../assets/skydiver.png'

const Contact = () => {

    return (
    <Contactsection>
      <MainContent>
          <ImageContainer>
                <SkydiverImage src={skydiver} alt="skydiver png" width='400' height='400'/>
          </ImageContainer>
          <TextContainer>
                  <Title>Coming soon!</Title>
                  <Text>Reimaging the way Agents, Buyers, and Sellers to communicate about and share Real-Estate</Text>
                  <SubText>SIGN UP FOR RELEASE DATES AND UPDATES.</SubText>
                  <Formtesting/>
            </TextContainer>
      </MainContent>
  </Contactsection>
    );  
}

export default Contact;