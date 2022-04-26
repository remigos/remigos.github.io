import React, { Component } from "react";
import Slider from "react-slick";
import { Subtitle, Card, Icon, Text} from './InfoThree.elements'
import Focus from '../../../../assets/Icon/Focus.png'
import Light from '../../../../assets/Icon/Light.png'
import LightHome from '../../../../assets/Icon/LightHome.png'
import './Carousel.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1, 
      dotsClass: "button_bar",

    };
    return (
      <div className='carousel_container'>
        <Slider {...settings} style={{alignItems: 'center', justifyContent:'center'}}>
          <div>
                <Card>
                    <Icon src={Focus} alt="Search-homes"/>
                    <Subtitle>Service focused</Subtitle>
                    <Text>Remigo is all about bringing parties together into a more organized and effective way. We strive to provide the best service to our clients so that in turn, they can provide the best service to theirs. Good service builds a bond.</Text>
                </Card>
          </div>
          <div>
                <Card>
                    <Icon src={Light} alt="Light"/>
                    <Subtitle>Problem solving</Subtitle>
                    <Text>We value a problem solving mentality not just in our product but how we approach our clients as well. Always be learning and rising to the next challenge.</Text>
                </Card>
          </div>
          <div>
                <Card>
                    <Icon src={LightHome} alt="Light-home"/>
                    <Subtitle>Client first</Subtitle>
                    <Text>While there are hurdles to overcome, the Remigo team focuses on client experiences to design a platform that can grow and evolve to meet the needs of our clients and provide them with the best solution possible.</Text>
                </Card>
          </div>

        </Slider>
      </div>
    );
  }
}