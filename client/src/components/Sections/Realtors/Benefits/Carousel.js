import React, { Component } from "react";
import Slider from "react-slick";
import { Subtitle, Card, Icon, Text} from './Benefits.elements'
import home from '../../../../assets/Icon/Home.png'
import share from '../../../../assets/Icon/Share.png'
import checks from '../../../../assets/Icon/Checks.png'
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
                    <Icon src={home} alt="home"/>
                    <Subtitle>Market updates</Subtitle>
                    <Text>Receive property updates in real time, keep listings organized, and be ready to jump on your dream home immediately.</Text>
                </Card>
          </div>
          <div>
                <Card>
                    <Icon src={share} alt="share"/>
                    <Subtitle>Property sharing</Subtitle>
                    <Text>Property sharing like you’ve never seen it. Share feedback and comments both ways and build a better shopping experience for everyone.</Text>
                </Card>
          </div>
          <div>
                <Card>
                    <Icon src={checks} alt="checks"/>
                    <Subtitle>Listing feedback</Subtitle>
                    <Text>Feedback is made quick and easy with comments, ratings and questions directly on properties and details. Keep communication...</Text>
                </Card>
          </div>

        </Slider>
      </div>
    );
  }
}