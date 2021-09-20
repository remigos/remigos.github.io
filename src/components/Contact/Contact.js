import React from 'react';
import {Contactsection, MainContent, ImageContainer, SkydiverImage, TextContainer, Title,Text, SubText, FormSection} from './Contact.elements';
import Forms from '../Form/Form'
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
                  <FormSection>
                    <Forms/>
                  </FormSection>
            </TextContainer>
      </MainContent>
  </Contactsection>
    );  
}

export default Contact;