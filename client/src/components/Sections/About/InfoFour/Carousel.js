import React, { Component } from "react";
import Slider from "react-slick";
import { Card, LeftContainer, RightContainer, Image, Name } from './InfoFour.elements'
import profile from '../../../../assets/About/Profile.png'
import { Text } from '../../../../globalStyles'
import './Carousel.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1, 
      dotsClass: "button_bar1",

    };
    return (
      <div>
        <Slider {...settings}>
          <div>
                <Card>
                   <LeftContainer>
                        <Text>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</Text>
                        <Name>Scarlett Johansson</Name>
                        <Text>CEO at Xion</Text>
                   </LeftContainer>
                   <RightContainer>
                            <Image src={profile} alt="profile"/>
                   </RightContainer>
                </Card>
          </div>
          <div>
                <Card>
                   <LeftContainer>
                        <Text>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</Text>
                        <Name>Scarlett Johansson</Name>
                        <Text>CEO at Xion</Text>
                   </LeftContainer>
                   <RightContainer>
                            <Image src={profile} alt="profile"/>
                   </RightContainer>
                </Card>
          </div>
          <div>
                <Card>
                   <LeftContainer>
                        <Text>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</Text>
                        <Name>Scarlett Johansson</Name>
                        <Text>CEO at Xion</Text>
                   </LeftContainer>
                   <RightContainer>
                            <Image src={profile} alt="profile"/>
                   </RightContainer>
                </Card>
          </div>
        </Slider>
      </div>
    );
  }
}